#!/bin/bash
#add files to build here

cd /app/src
emcc increment.cpp -o increment.js 
mv increment.wasm ../public

npm run dev