# Data Types

JavaScript's basic types include `Object`, `Array`, `String`, `Number`, `Boolean`, `null` and `undefined`. Those probably sound pretty familiar to you. `Object` is a key-value map as you probably have figured out by now. `Array` is a zero-indexed ... well, array. Rather than having separate types for integers and floats, we get around with `Number` type in JavaScript. No need to make things more complex than that. `Boolean` is just that, true or false. `null` is a bit of useless one. It is a value that is known to exist but value of which is unknown. `undefined` is both and will be used as a placeholder in that `var a;` case for instance.

It is possible to mimic more complex types, such as queues and sets, quite easily using these. A queue of sort can be implemented using an array. We primarily need to make sure that it's length has been fixed to some predefined value. It's implementation could look like this for example:

```js
function queue(len) {
    var ret = [];

    ret.push = function(a) {
        if(ret.length == len) ret.shift();
        return Array.prototype.push.apply(this, arguments);
    };

    return ret;
}

var a = queue(3);
a.push('cat');
a.push('dog');
a.push('chimp');
a.push('giraffe');
console.log(a); // should contain dog, chimp, giraffe now
```

Here we abuse the fact that even an array is an object in JavaScript. In this case we simply attach a custom version of push to our queue. It keeps track of the queuing logic. Otherwise the functionality provided by array is enough for our purposes. You could for instance `pop` to get and remove the last item or `shift` to do the same but for the first item.

This is yet another example of how to benefit from closures. There's that inner function (push), namespacing and all that shiz. Hopefully you have figured out how they work by now.

We can do something a bit similar with sets. In this case we benefit from the fact that all keys of an object are unique. That is essentially the definition of a set. The only limitation of this approach is that we may use only numbers or strings as keys. Often this is enough, though.
