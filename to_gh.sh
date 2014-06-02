#!/bin/bash
gitbook build
cp -rf _book/* ../survive-js-gh/
rm -rf _book
