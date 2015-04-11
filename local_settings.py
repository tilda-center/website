DEBUG = True

# Make these unique, and don't share it with anybody.
SECRET_KEY = "9f320aef-fd3d-44c3-b3e9-5c54d4a5483bb2f0fe62-5373-44d8-a26a-ea6e0e4f1e5c60bf27fa-5493-4d5b-89e0-8edb66c335c8"
NEVERCACHE_KEY = "06d83596-75e3-451e-bdb9-a3ec88587ad7bdd8418b-116a-46fd-9cbe-a669a591e412c7a7bac3-4492-4282-9110-cdfb04e85dd0"

DATABASES = {
    "default": {
        # Ends with "postgresql_psycopg2", "mysql", "sqlite3" or "oracle".
        "ENGINE": "django.db.backends.sqlite3",
        # DB name or path to database file if using sqlite3.
        "NAME": "dev.db",
        # Not used with sqlite3.
        "USER": "",
        # Not used with sqlite3.
        "PASSWORD": "",
        # Set to empty string for localhost. Not used with sqlite3.
        "HOST": "",
        # Set to empty string for default. Not used with sqlite3.
        "PORT": "",
    }
}

TIME_ZONE = 'Europe/Belgrade'
SITE_TAGLINE = 'Hackerspace in Novi Sad'
SITE_TITLE = 'Tilda Center'
