#!/bin/bash
gitbook build --plugins=ga --pluginsConfig=gitbook.json
cp -rf _book/* ../survive-js-gh/
rm -rf _book
