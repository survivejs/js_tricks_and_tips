# Testing

It is not possible to prove (easily at least) absence of bugs. You can, however, show that there are bugs in your code. This is where testing comes handy. Let's start by defining behavior of an `assert` function. As JavaScript doesn't come with an `assert` statement by default I've defined one myself. In case you are using Node, consider utilizing [assert module](http://nodejs.org/api/assert.html).

```js
function assert(s) {
    if(!s) throw new Error('Assertion failed!');
}
```
