#!/bin/bash
cd "$(dirname "$0")"
git push
git push origin master:gh-pages
git push --tags
