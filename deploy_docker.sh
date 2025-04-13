#!/bin/bash
docker build -t portfolio .

docker stop $(docker ps -q --filter ancestor=portfolio) || true
docker rm $(docker ps -a -q --filter ancestor=portfolio) || true

docker run -d -p 3000:3001 portfolio
