import math
from flask_restplus import abort
from . import api


def_per_page = 10


parser = api.parser()
parser.add_argument(
    'X-Page',
    type=int,
    required=False,
    default=1,
    help='Page number',
    location='headers'
)
parser.add_argument(
    'X-Per-Page',
    type=int,
    required=False,
    default=def_per_page,
    help='Items per page',
    location='headers'
)


def pages():
    args = parser.parse_args()
    page = args.get('X-Page')
    per_page = args.get('X-Per-Page')
    return(page, per_page)


def limit(objects):
    page, per_page = pages()
    if page < 1:
        abort(409, 'Page number must be at least 1')
    result = objects.paginate(page, per_page)
    result.headers = {
        'X-Total-Count': result.count(),
        'X-First-Page': 1,
        'X-Last-Page': int(math.ceil(float(objects.count()) / per_page)),
        'X-Current-Page': page,
        'X-Per-Page': per_page,
    }
    return result
