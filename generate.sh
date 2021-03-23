#!/bin/bash

docker run --rm \
  -v "${PWD}/openapi/src:/local/src" \
  -v "${PWD}/openapi/dist:/local/dist" \
  openapitools/openapi-generator-cli generate \
    -g typescript-axios \
    -i /local/src/my_api.v1.yaml \
    -o /local/dist
  