from . import api

ns_auth = api.namespace('auth', description='Auth operations')
ns_events = api.namespace('events', description='Event operations')
ns_gallery = api.namespace('gallery', description='Gallery operations')
ns_user = api.namespace('users', description='User operations')
