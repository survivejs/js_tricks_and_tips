#!/bin/bash
cd "$(dirname "$0")"
cd ..

# update content
if [ -d "survive-js.wiki" ]; then
    cd survive-js.wiki
    git pull
    cd ..
else
    git clone git@github.com:bebraw/survive-js.wiki.git
fi

# build now
node_modules/ghw/bin/ghw -c site.json -i survive-js.wiki -o . -t templates -s
