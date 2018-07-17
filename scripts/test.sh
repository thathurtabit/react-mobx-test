#!/bin/sh

npm install
CI=true npm run test:ci
