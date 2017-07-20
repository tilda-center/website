import os
import re
from shutil import rmtree
from flask_jwt import current_identity
from flask_restplus import abort
from resources import ProtectedResource
from werkzeug.datastructures import FileStorage
from .namespaces import ns_gallery
from .fields.gallery import fields, get_fields


upload_part_done_parser = ns_gallery.parser()
upload_done_parser = ns_gallery.parser()
upload_part_done_parser.add_argument('qqtotalparts', location='form', type=str)
upload_part_done_parser.add_argument(
    'qquuid',
    location='form',
    type=str,
    required=True,
)
upload_part_done_parser.add_argument(
    'qqfilename',
    location='form',
    type=str,
    required=True,
)
upload_part_done_parser.add_argument(
    'qqtotalfilesize',
    location='form', type=str,
)


upload_parser = upload_part_done_parser.copy()
upload_parser.add_argument('qqfile', location='files', type=FileStorage)
upload_parser.add_argument('qqpartindex', location='form', type=int)
upload_parser.add_argument('qqpartbyteoffset', location='form', type=int)
upload_parser.add_argument('qqchunksize', location='form', type=int)

upload_done_parser.add_argument('imageLinks', location='json', type=list)

multipart_uploaders = {}


@ns_gallery.route('/part', endpoint='upload-part')
class UploadPartAPI(ProtectedResource):
    @ns_gallery.expect(upload_parser)
    def post(self):
        global multipart_uploaders
        args = upload_parser.parse_args()
        index = args.get('qqpartindex')
        file = args.get('qqfile')
        filename = args.get('qqfilename')
        uuid = args.get('qquuid')
        temp_directory = '/tmp/{}'.format(uuid)
        if not os.path.exists(temp_directory):
            os.makedirs(temp_directory)
        chunk_number = index or 0
        formated_index = '%06d' % chunk_number
        temp_file = '{}/{}'.format(temp_directory, formated_index)
        file.save(temp_file)
        file.seek(0)
        return {'success': 'done'}


@ns_gallery.route('/part/done', endpoint='upload-part-done')
class UploadPartDoneAPI(ProtectedResource):
    @ns_gallery.expect(upload_part_done_parser)
    def post(self):
        args = upload_parser.parse_args()
        uuid = args.get('qquuid')
        temp_directory = '/tmp/{}'.format(uuid)
        rmtree(temp_directory)
        return {'success': 'done'}, 200


@ns_gallery.route('/part/<id>', endpoint='upload-part-delete')
class UploadPartDeleteAPI(ProtectedResource):
    def delete(self, id):
        return {'success': 'done'}


@ns_gallery.route('/done', endpoint='upload-done')
class UploadDoneAPI(ProtectedResource):
    @ns_gallery.expect(fields)
    @ns_gallery.marshal_with(get_fields)
    def post(self):
        args = upload_done_parser.parse_args()
        return {'status': 'ok'}

@ns_gallery.route('/clean', endpoint='upload-clean')
class UploadDoneAPI(ProtectedResource):
    def get(self):
        return {'status': 'ok'}
