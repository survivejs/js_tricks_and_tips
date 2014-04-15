# Globals

Next I'll show you how to leak globals. Consider the example below. Can you see what changed? Why is the example leaking?

```js
function map(cb, arr) {
    var ret = [];
    var i;

    for(i = 0, len = arr.length; i < len; i++) {
        ret.push(cb(arr[i], i));
    }

    return ret;
}
```

Even though the change was quite innocent now we have a leak in our hands. `len` is polluting our global namespace. All we did was to forget to declare our `len` as a `var`.

Many consider this a design flaw of JavaScript and I would agree. It is a good idea to declare which variables you are going to use at the beginning of the function. There are various opinions on how to achieve this syntactically but the above (apart from the bug) is what I like to stick with.

> In browser environment the global namespace is also known as `window` for some curious reason. As this might not be the case in other environments I'm using the more general term here. This is also why it is not that nice to depend on `window`.
