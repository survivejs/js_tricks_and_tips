# Factories and Generators

If you have used `Java` you have likely seen the joke about `AbstractSingletonProxyFactoryBean`. As it happens factories are actually an interesting way to construct specialized objects. JavaScript's closures enable us to create factories quite easily. This allows us to implement a pattern known as generator. In Python or some other language you might have bumped into `yield` keyword. That's what we're going to effectively implement next.

A generator is quite a simple thing really. It is just something that gives us a value when we poke it correctly. Let's get started with something very simple and generalize that later. The simplest possible generator I can think of generates just a series of same values (say 42). Here's an implementation of this particular case.

```js
function numberGenerator() {
    return {
        next: function() {
            return 42;
        }
    };
}

var gen = numberGenerator();
console.log(gen.next(), gen.next()); // -> 42 42
```

As you can see we can get a nice series of 42's right now. That is only part of the story, though. We could parametrize the function as you might not want a 42 always. We could also take it a step further and make it use some rule. Let's say we want to get a series of n^2. Time to code!

```js
function powerGenerator() {
    var i = 0;

    return {
        next: function() {
            var ret = Math.pow(i, 2);

            i++;

            return ret;
        }
    };
}

var gen = powerGenerator();
console.log(gen.next(), gen.next(), gen.next()); // -> 0 1 4
```

This example shows us the power of closures. As you can see, we store `i` at the outer scope of the object we actually operate on. It seems kind of trivial but it is one of those features of JavaScript it really pays off to understand as it allows us to implement all sorts of nifty little patterns such as this quite easily.

You can take the approach even further and generalize it. Since we might not want to operate on `pow` or squares always, we probably should define some sort of factory. I have done this below. As a bonus there's a cyclic one.

```js
function generator(valueCb, initial) {
    return function() {
        var i = initial || 0;

        return {
            next: function() {
                var ret = valueCb(i);

                i++;

                return ret;
            }
        };
    }();
}

function cycle() {
    var items = arguments;

    return generator(function(i) {
        return items[i % items.length];
    });
}

function pows(n, initial) {
    return generator(function(i) {
        return Math.pow(i, n);
    }, initial);
}

var color = cycle('red', 'green', 'blue'); // red, green, blue, red, green, ...

var nums = pows(1); // 0, 1, 2, 3, ...
var squares = pows(2, 2); // 4, 9, ...
var cubes = pows(3); // 0, 1, 8, 27, 64, ...
```

I hope this example gave you some idea of the power of generators and factories. I know that especially the generator pattern isn't used a lot but at least it makes a perfect excuse of an example and helps you understand a bit about closures.

One problem of the approach has to do with the `next` method. It doesn't sit that well with existing iterators. You will likely need to implement some custom ones to deal with that. On the other hand the approach is lazy by definition. So no computation will be done unless you really mean it. Overall it is just one example of how to program `into` language rather than `in` language to quite McConnell of `Code Complete` fame.
