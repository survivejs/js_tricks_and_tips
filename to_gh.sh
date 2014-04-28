#!/bin/bash
gitbook build --plugins=ga,-mixpanel,-mathjax --pluginsConfig=gitbook.json
cp -rf _book/* ../survive-js-gh/
rm -rf _book
