# What is `this`?

`this` refers to function context. What is this context then? It depends. In this case we may set it explicitly. This means we may access contents of `this` Object within the context itself.

As I fear I may have confused you even more with this explanation, let's consider something more concrete. If you are as unlucky not to know what an Object is, let's stick an Object to our example. In computer science terms JavaScript Object can be considered a map of key-value pairs. All keys are always Strings whereas values can be pretty much anything.

```
var obj = {
    ctx: function() {console.log(this)},
    name: 'demo object'
};

obj.ctx(); // -> ???
```

Can you guess what `object.ctx()` prints out? That's right. We should see the Object itself there. Handy isn't it?

`this` can actually be fairly dangerous at times. It is a good idea to think through whether or not you really need it. Some libraries, such as jQuery, tend to rely on it somewhat. I don't consider that good design personally as you are effectively trading off some composability. And the last thing I want to do is to call certain functions using either [call](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call) or [apply](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/apply) speaking of which that is probably what I should cover next.
