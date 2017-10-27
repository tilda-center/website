from flask_restplus.fields import String, DateTime, Boolean
from .. import api


fields = api.model(
    'Gallery',
    {
        'date': DateTime(description='Date'),
        'markdown': String(description='Markdown'),
        'published': Boolean(description='Published', default=False),
        'title': String(description='Title'),
    },
)

get_fields = api.clone(
    'Get Gallery',
    fields,
    {
        'id': String(description='ID'),
    },
)
