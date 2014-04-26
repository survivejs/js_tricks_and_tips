# Globals and Other Nasties

As you probably know by now all variables are global by default. You will have to use `var` keyword to explicitly mark them as local. To quote certain Ackbar, "it's a trap". There are a couple of ways to deal with the issue. I'll start with a conventional one. Consider the example below.

```js
function mathMagic(items, b, c) {
    var fac = 5;
    var rx, ry, rz, ret;

    ret = items.map(function(v) {...});
}
```

As seen above I prefer to group my variables at top of a function by default. They might get some default values or not. There are some people that use just one `var` and then group the variables using that nifty `,` syntax. In any case it is a good convention to have.

This doesn't eliminate the issue totally. It can be very beneficial to configure your editor to highlight globals as red or some annoying color (maybe pink?).

[Strict mode](https://developer.mozilla.org/en/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode) can be very helpful as well. It changes the behavior of the language a bit and makes it easier to spot errors such as this one. [Nicholas Zakas' post on the issue likely provides some extra enlightenment.](http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/)

Tools such as [JSLint](http://www.jslint.com/) and its less opinionated little brother [JSHint](http://www.jshint.com/) allow you to spot certain groups of problems quite easily. I recommend picking either one and hooking it up with your editor. You'll save some time and maybe develop that bald a bit later rather than sooner.

If you are really obsessed, maybe it's time to write a transpiler or [use some existing one](http://altjs.org/). After all, what could you not solve by writing code that writes code? That's yet another bag of problems, though. In practice simple code transformation tools can be nice, though. Just keep your cool with it.
