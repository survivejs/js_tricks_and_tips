# AMD

The next logical step would be to make sure things get loaded in the right order and write a tool that happens to do that. To do this we'll need to define our dependencies somehow and be able to parse them in a meaningful order. Because this is how module systems roll.

One popular way to achieve this goal on definition level is to use AMD (not Intel). AMD stands for `Asynchronous Module Definition`. You can see a simple AMD module below:

```js
// this is a collection of some widgets
define(['jquery', 'math'], function($, math) {
    // operate using $, math
    function range() {
        ...
    }

    ...

    // exports
    return {
        xRange: function() {
            ...
        },
        yRange: function() {
            ...
        }
    };
});
```

The definition consists of a few parts. First of all there's that `define` wrapper. It is a function that accepts a list and a function in this case. Dependencies of the module are defined within that list. They will appear as parameters to that callback. The callback can then operate using those dependencies. Finally it may return `exports`. That is the public interface the module provides.

`define` may also accept just a function or an object. You can find examples of these two cases below:

```js
define(function() {
    return function() {
        console.log('Hello mon!');
    };
})

// or just Object (handy for configuration)
define({
    showDebugTools: true,
    features: {
        newRange: true,
        newUi: true
    }
});
```

Even though the approach leads to some overhead on module definition level you have that dependency information now. This is something [RequireJS](http://requirejs.org/) optimizer may use to produce that concatenated version should you want to. It may also `minify` the code for you. In this process the code will be mangled into a minimal form (ie. no spaces, short variable names and such). The code won't be very debuggable this way but at least it will be compact.

`RequireJS` comes with some nice features such as asynchronous loading and package definition. Asynchronous loading enables the browser to load and execute dependencies at the same time. So rather than loading a single, big file once and then starting to parse it, it can operate piece-wise instead.

Package definition is one of those features that allows you to split your functionality further. In fact using it you may end using `micro modules`. A micro module is a module that provides just one function. It doesn't get simpler than that. This is a great thing for building libraries. [Mout](http://moutjs.com/) and [funkit](https://github.com/bebraw/funkit) are examples of libraries using this particular approach.

As not to make things too simple I'll show you one more trick. It is possible to mix AMD and CommonJS definitions. I've ported that first AMD example above to the scheme. Compare and contrast.

```js
// this is a collection of some widgets
define(function(require, exports) {
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
});
```

At least to my eyes that's more readable. But that might have something to do with the fact that I've been using Node too much.
