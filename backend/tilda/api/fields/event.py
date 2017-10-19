from flask_restplus.fields import String, DateTime
from .. import api


fields = api.model(
    'Gallery',
    {
        'markdown': String(description='Markdown'),
        'title': String(description='Title'),
        'date': String(description='Title'),
    },
)

get_fields = api.clone(
    'Get Gallery',
    fields,
    {
        'id': String(description='ID'),
    },
)
