from flask import current_app
from flask_jwt_extended import get_jwt_identity

from ..models.auth import User
from ..models.blog import Blog
from .namespaces import ns_blog
from .resources import ProtectedResource
from .schemas import BlogSchema


@ns_blog.route('', endpoint='blogs')
class BlogListAPI(ProtectedResource):
    def get(self):
        """List blog"""
        schema = BlogSchema(many=True)
        response, errors = schema.dump(Blog.select())
        if errors:
            return errors, 409
        return response

    @ns_blog.expect(BlogSchema.fields())
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
class BlogAPI(ProtectedResource):
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
