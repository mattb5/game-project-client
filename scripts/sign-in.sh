#!/bin/bash


# curl "http://httpbin.org/post" \
curl "http://localhost:3000/sign-in" \
  --include \
  --request POST \
  --data-urlencode ""
  --data "{
    \"credentials\": {
      \"email\": \"$EMAIL\",
      \"password\": \"$PASSWORD\",
    }
  }"
echo
