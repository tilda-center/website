#!/bin/bash

sudo docker run -p 8000:8000 -v /vagrant/projects/tilda:/app --rm --link postgresql:postgresql mekanix/tilda_center:latest
