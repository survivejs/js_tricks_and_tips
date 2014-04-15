# Hoist the Sails!

So far we have seen various ways to deal with scoping in JavaScript. One very important fact to keep in mind is that the language use `function level scope` rather than `block level` one in which many programmers have gotten used to. Effectively this means variables declared within blocks might not behave as you would like. On the other hand JavaScript more than makes up for this with closures as we saw above.

There is one extra thing that you should be at least aware of: the concept of hoisting. Consider the example below:

```js
function hoist() {
    console.log(a);

    var a = 42;

    console.log(a);
}

hoist();
```

Even though it might look a bit counter-intuitive, it gets interpreted just fine because of hoisting. `a` will get hoisted on top of the `hoist` function. It's value will be `undefined` initially, though, and the value will be assigned where it is assigned right now. Hoisting also applies to functions. This means you may declare them in an arbitrary order. I often like to declare my functions in some kind of a reading order (dependencies go usually below). This makes it easier and faster to scan through the code.

Ben Cherry has written an [excellent post on the topic of hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html). You should go and read it in case you are interested in the topic further. You will find some additional examples there.
