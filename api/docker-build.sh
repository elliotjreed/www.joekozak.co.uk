#!/usr/bin/env bash
set -euo pipefail

docker build -f ./php/Dockerfile -t elliotjreed/joekozak-php:latest .
docker build -f ./nginx/Dockerfile -t elliotjreed/joekozak-api-nginx:latest .

docker push elliotjreed/joekozak-php:latest
docker push elliotjreed/joekozak-api-nginx:latest
