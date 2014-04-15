# Current State

Particularly in the last few years the usage of JavaScript has grown explosively. Instead of using it to sprinkle some functionality to their sites some people are using it to manage the whole stack from backend to frontend. This has been possible thanks to the increasing popularity of [Node.js](http://nodejs.org/). A whole ecosystem has grown around it. Particularly [NPM](https://npmjs.org/) has been an important factor in this growth as it has allowed people to share their modules and use ones created by others.

Traditionally this has been a weakness of JavaScript as it does not come with a de facto module system. Let's just say the situation is still a bit messy although it is getting better on the frontend side thanks to solutions such as [RequireJS](http://requirejs.org/) and [browserify](https://github.com/substack/node-browserify). The former implements a [module definition known as AMD](http://requirejs.org/docs/whyamd.html) whereas the latter allows to use module semantics familiar from Node on the frontend side.

> Better yet ES6 may finally solve this issue once and for all. I definitely hope so. Even still there will likely be a period of time where ES6 compatible code will be transpiled into ES4 format.
