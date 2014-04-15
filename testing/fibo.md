# Fibonacci's Numbers Using `annotate`

Just to give you another example of the power of annotations, consider the example below. It shows you how to implement a function that yields a series of [Fibonacci's numbers](http://en.wikipedia.org/wiki/Fibonacci_number). The definition is quite close to the original and reads well at least to my eye.

```js
var fib = annotate('fib', 'Calculates Fibonacci numbers')
    .on(0, 0).on(1, 1)
    .on(is.number, function(n) {
        return fib(n - 1) + fib(n - 2);
    });
```

I use this form of testing quite a bit at a library of mine, [funkit](https://github.com/bebraw/funkit). Unfortunately `generative testing` hasn't quite gained widespread acceptance within the JavaScript community. For instance the Haskell guys are way ahead of us with their [QuickCheck](http://www.cse.chalmers.se/~rjmh/QuickCheck/manual.html). There are implementations available for other languages as well and it is quite easy to port the idea.

These two ways to test are handy for validating some basic assumptions on individual functions. That is only small part of the field. You might for instance want to know how your code behaves on various platforms. This is where `browser testing` comes in.
