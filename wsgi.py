from __future__ import unicode_literals

import os

from django.core.wsgi import get_wsgi_application


PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
settings_module = "settings"
os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings_module)

application = get_wsgi_application()
