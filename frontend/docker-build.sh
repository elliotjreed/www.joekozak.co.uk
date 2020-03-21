#!/usr/bin/env bash
set -euo pipefail

docker build -f ./Dockerfile -t elliotjreed/joekozak-nginx:latest .
docker push elliotjreed/joekozak-nginx:latest
