import os
import re
from resources import ProtectedResource
from .namespaces import ns_event
from .fields.event import fields, get_fields
from ..models.event import Event


parser = ns_event.parser()
parser.add_argument('email', type=str, required=True, location='json')
parser.add_argument('password', type=str, required=False, location='json')


@ns_event.route('', endpoint='events')
class EventListAPI(ProtectedResource):
    @ns_event.marshal_with(get_fields)
    def get(self):
        """List events"""
        events = [event for event in Event.select()]
        return events
