# CommonJS

Porting our little example to CommonJS scheme that Node.js implements isn't that hard. We just need to *remove* something. Consider following:

```js
var $ = require('$');
var math = require('math');

// operate using $, math
function range() {
    ...
}

...

// exports
exports.xRange = function() {
    ...
};

exports.yRange = function() {
    ...
};
```

It doesn't get prettier than that. I personally like this definition a lot. And if you ever use Node, you will bump into it. It isn't just a Node thing anymore, though.

[Browserify](https://github.com/substack/node-browserify) allows you to use the definition on browser side as well. It comes with a tool that interprets the dependency information and constructs a file which you can then load like above. For some this is the holy grail as it allows you to share some code between the backend and the frontend. It would not surprise me if the approach gained some popularity.
