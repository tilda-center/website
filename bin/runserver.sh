#!/bin/bash

sudo docker run -it -p 8000:8000 -v /vagrant/projects/tilda:/app --rm --link postgresql:postgresql mekanix/tilda_center:latest python /app/manage.py runserver 0.0.0.0:8000
