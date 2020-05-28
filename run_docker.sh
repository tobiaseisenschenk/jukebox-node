#!/usr/bin/env bash

docker build --tag=tje512/jukebox-mini .
docker image ls
docker run -p 80:80 jukebox-mini
