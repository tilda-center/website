from flask import current_app
from flask_jwt_extended import get_jwt_identity, jwt_required
from flask_restplus import Resource

from ..models.auth import User
from ..models.blog import Blog
from .namespaces import ns_blog
from .schemas import BlogSchema


@ns_blog.route('', endpoint='blogs')
class BlogListAPI(Resource):
    def get(self):
        """List blog"""
        email = get_jwt_identity()
        schema = BlogSchema(many=True)
        if email is None:
            query = Blog.select().where(Blog.published == True)
        else:
            query = Blog.select().where()
        response, errors = schema.dump(query)
        if errors:
            return errors, 409
        return response

    @ns_blog.expect(BlogSchema.fields())
    @jwt_required
    def post(self):
        schema = BlogSchema()
        blog, errors = schema.load(current_app.api.payload)
        if errors:
            return errors, 409
        email = get_jwt_identity()
        try:
            user = User.get(email=email)
        except User.DoesNotExist:
            return {'message': 'User not found'}, 404
        blog.author = user
        blog.save()
        return schema.dump(blog)


@ns_blog.route('/<year>/<month>/<day>/<slug>', endpoint='blog')
@ns_blog.response(404, 'Blog not found')
class BlogAPI(Resource):
    def get(self, year, month, day, slug):
        """Get user details"""
        try:
            blog = Blog.find(year, month, day, slug)
        except Blog.DoesNotExist:
            return {'message': 'No such blog'}, 404
        except ValueError:
            return {'message': 'Multiple blogs found'}, 409
        schema = BlogSchema()
        response, errors = schema.dump(blog)
        if errors:
            return errors, 409
        return response

    @ns_blog.expect(BlogSchema.fields(required=False))
    @jwt_required
    def patch(self, year, month, day, slug):
        try:
            blog = Blog.find(year, month, day, slug)
        except Blog.DoesNotExist:
            return {'message': 'No such blog'}, 404
        except ValueError:
            return {'message': 'Multiple blogs found'}, 409
        schema = BlogSchema()
        data, errors = schema.load(current_app.api.payload)
        if errors:
            return errors, 409
        blog.title = data.title or blog.title
        blog.content = data.content or blog.content
        blog.published = data.published or blog.published
        blog.save()
        return schema.dump(blog)

    @ns_blog.expect(BlogSchema.fields())
    @jwt_required
    def delete(self, year, month, day, slug):
        try:
            blog = Blog.find(year, month, day, slug)
        except Blog.DoesNotExist:
            return {'message': 'No such blog'}, 404
        except ValueError:
            return {'message': 'Multiple blogs found'}, 409
        schema = BlogSchema()
        response, errors = schema.dump(blog)
        if errors:
            return errors, 409
        blog.delete_instance()
        return schema.dump(blog)
