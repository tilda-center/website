from flask_restplus.fields import String, Integer, List, Float
from .. import api


fields = api.model(
    'Gallery',
    {
    },
)

get_fields = api.clone(
    'Get Gallery',
    fields,
    {
        'id': String(description='ID'),
    },
)
