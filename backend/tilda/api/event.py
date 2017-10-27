import os
import re
import pagination
from flask_restplus import Resource, abort
from flask_jwt import current_identity, jwt_required
from .namespaces import ns_events
from .fields.event import fields, get_fields
from ..models.event import Event
from ..utils import all_fields_optional


parser = ns_events.parser()
parser.add_argument('title', type=str, required=True, location='json')
parser.add_argument('markdown', type=str, required=True, location='json')


@ns_events.route('', endpoint='events')
class EventListAPI(Resource):
    @ns_events.marshal_with(get_fields)
    @ns_events.response(409, 'Invalid page')
    @ns_events.doc(parser=pagination.parser)
    def get(self):
        """List events"""
        events = pagination.limit(Event.select().order_by(Event.date))
        return [event for event in events], 200, events.headers

    @jwt_required()
    @ns_events.marshal_with(get_fields)
    @ns_events.doc(body=fields)
    def post(self):
        """Create new event"""
        args = parser.parse_args()
        title = args.get('title')
        markdown = args.get('markdown')
        event = Event(title=title, markdown=markdown)
        event.save()
        return event


@ns_events.route('/<id>', endpoint='event')
@ns_events.response(404, 'Event not found')
class EventAPI(Resource):
    @ns_events.marshal_with(get_fields)
    def get(self, id):
        """Get event details"""
        try:
            event = Event.get(id=id)
        except Event.DoesNotExist:
            abort(404, 'Event not found')
        return event

    @jwt_required()
    @ns_events.expect(fields)
    @ns_events.marshal_with(get_fields)
    def patch(self, id):
        """Update event"""
        try:
            event = Event.get(id=id)
        except Event.DoesNotExist:
            abort(404, 'Event not found')
        patch_parser = all_fields_optional(parser)
        args = patch_parser.parse_args()
        event.title = args.get('title') or event.title
        event.markdown = args.get('markdown') or event.markdown
        event.date = args.get('date') or event.date
        event.save()
        return event

    @jwt_required()
    @ns_events.marshal_with(get_fields)
    def delete(self, id):
        """Delete the event"""
        try:
            event = Event.get(id=id)
        except Event.DoesNotExist:
            abort(404, 'Event not found')
        event.delete()
        return event
