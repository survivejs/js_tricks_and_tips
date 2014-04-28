# Functions

Let's start with a simple math function that clamps given input based on given bounds. Here we go:

```js
function clamp(a, min, max) {
    if(a < min) return min;
    if(a > max) return max;

    return a;
}
```

In this case I decided to use a good ol' `if` statement to deal with the logic. The same may be written using ternary operators perhaps familiar to some from C.

```js
function clamp(a, min, max) {
    return a < min? min: a > max? max: a;
}
```

It's getting a bit convoluted alright, maybe it's not a good idea to nest those. Finally we can rewrite it using native `min` and `max` functions inherited from Java 1.0. You will find a bunch of these at [Math module](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math).

```js
function clamp(a, min, max) {
    return Math.max(min, Math.min(max, a));
}

// we can invoke any of these three simply using
clamp(4, 10, 20); // yields 10 in this case
```

There are likely some other ways to achieve the same result. The purpose of these three was just to give some idea of the basic structures and show the basic function syntax.

In JavaScript functions are first class citizen unlike in perhaps some less dynamic languages. You can simply pass functions to functions. These are also known as callbacks. This type of programming is quite commonly used in imperative style event based programming.

Let's define a simple `map` function this way. `map` is something that takes a callback (operation) as input, applies that operation for each member of the given data structure and then returns the result. In this case I'll stick to arrays although it is possible to generalize this approach to work with objects too. A basic implementation could look like this:

```js
function map(cb, arr) {
    var ret = [];
    var i;

    for(i = 0, len = arr.length; i < len; i++) {
        ret.push(cb(arr[i]));
    }

    return ret;
}

map(function(v) {
    return v * 2;
}, [34, 2, 5]); // yields [68, 4, 10]
```

There are a couple of things going on here you should be aware of. Notice the loop syntax. It's quite ugly alright but it's fine to use it on lower level constructs like this.

Sometimes it may be beneficial to name the callback (`function mul(v)` would work in this case) to make it easier to debug the code. The debugger will be able to use this information and show the name at a stack trace.

There is actually a nice alternative for the ugly default syntax. It is know as [Array.forEach](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach). Check it out. See [Array.map](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map) while at it.

Using these may require `shims` depending on which browsers you want to support but on the other hand they make language so much more fun to use it's usually worth it.

## Exercises

Besides `map` there are a couple of other functional constructs that you will find useful. These are known as [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

As you saw above `Array.map` can be useful for mapping values from a domain to another. `Array.filter` is something that allows you to remove values from given input. `Array.reduce` allows you to fold given values into a new value.

In order to understand better what these functions do and how they work I want you to implement them. In case you need some help, see the links above for more comprehensive descriptions.

---

Define a `filter` function. It should yield following results:

* filter(function(v) {return v > 10;}, [0, 4, 13, 20]).length === 2
* filter(function(v) {return true;}, [1, 2, 3]).length === 3
* filter(function(v) {return false;}, [4, 5, 6]).length === 0

```js
function filter(cb, arr) {
    var ret = [];

    return ret;
}
```

```js
function filter(cb, arr) {
    var ret = [];
    var i, v;

    for(i = 0, len = arr.length; i < len; i++) {
        v = arr[i];

        if(cb(v)) {
            ret.push(v);
        }
    }

    return ret;
}
```

```js
assert(filter(function(v) {return v > 10;}, [0, 4, 13, 20]).length === 2, 'should return only items matching to filter');
assert(filter(function(v) {return true;}, [1, 2, 3]).length === 3, 'should return all if filter is true');
assert(filter(function(v) {return false;}, [4, 5, 6]).length === 0, 'should return none if filter is false');
```

---

---

Define a `reduce` function. It should yield following results:

* reduce(function(a, b) {return a + b;}, [0, 4, 13, 20]) === 37
* reduce(function(a, b) {return a.concat(b);}, [[0, 1], [0, 2], [0, 3]]).length === 6

```js
function reduce(cb, arr) {
    var ret = [];

    return ret;
}
```

```js
function reduce(cb, arr) {
    var ret = arr[0];
    var i;

    for(i = 1, len = arr.length; i < len; i++) {
        ret = cb(ret, arr[i]);
    }

    return ret;
}
```

```js
assert(reduce(function(a, b) {return a + b;}, [0, 4, 13, 20]) === 37, 'should sum given array');
assert(reduce(function(a, b) {return a.concat(b);}, [[0, 1], [0, 2], [0, 3]]).length === 6, 'should return all if filter is true');
```

---
