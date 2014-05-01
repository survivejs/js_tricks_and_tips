# Arguments are Fun

It is definitely fun to argue. Oh wait, I was supposed to introduce you to `arguments`. Not arguing with people. Wrong book.

There are generally put three ways to deal with function parameters in JavaScript. And no, I won't have an argument with you over is it a parameter or an argument. If you look from the outside, it's a parameter. If from the inside, it's an argument. Capiche?

The first way is the one we have used a lot already. You simply pass the parameters in a specific order and the function gets those as arguments in that specific order. Nothing complicated there.

Unfortunately JavaScript doesn't provide named parameters for us yet. As it happens it is possible to work around this problem with a little bit of Object magic. There is something about Object.

The third way has to do with the keyword [arguments](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/arguments). You can probably guess what that contains. It looks like an Array but isn't quite like one.

As you might be mighty confused right now about what the guy is blabbering about, I've concocted amazing functions performing additions in various interesting and imaginative ways.

```
var add = function(a, b) {
    return a + b;
}

var addNamed = function(o) {
    return o.a + o.b;
}

var addMany = function() {
    var ret = 0;
    var i, len;

    for(i = 0, len = arguments.length; i < len; i++) {
        ret += arguments[i];
    }

    return ret;
}
```

I generally favor the first variant in my APIs. If the amount of parameters goes beyond three, I start to question myself even more than usually. That is usually a sign that something needs to change. I use the second variant particularly for jQuery plugins. In that case I often merge the passed parameters over some default ones using [$.extend](http://api.jquery.com/jQuery.extend/). The last one is preserved for special cases only.

Even though `arguments` might look like an Array, it isn't one. As MDN suggests, you can convert it to one either by using `Array.prototype.slice.call(arguments)` or `Array.slice(arguments)`. You can [shim latter in](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array#Array_generic_methods).

I hope this settles the argument once and for all. That `Array.prototype` actually looks a bit interesting. What's that about?
