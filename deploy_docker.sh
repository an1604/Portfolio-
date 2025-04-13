#!/bin/bash
docker build -t portofolio .

docker stop $(docker ps -q --filter ancestor=portofolio) || true
docker rm $(docker ps -a -q --filter ancestor=portofolio) || true

docker run -d -p 3000:3001 portofolio
