# Partial Application

Let's say we have a bunch of forenames (say ['Joe', 'Jack', 'Jill']). For a sake of example we will want to suffix those with a surname. As we are being really original here, let's pick 'Johnson' as that isn't generic at all. How could we achieve that using JavaScript? You can go and code something now. I'll wait here for a while.

I hope you have something together now. Even if you don't, let's consider the problem a while. This sounds like a `map`. So it must be a map. Now how to define that. We'll, just look above. You can find the definition there. In case we are feeling particularly lazy and happen to have the right browser at our disposal, the snippet below will do the trick:

```js
['Joe', 'Jack', 'Jill'].map(function(n) {return n + ' Johnson';});
```

Yeah, that's simple but not very over-engineered yet. How can we make our intent clearer? What if we wanted to apply the same function to some other list of items? As this is a contrived example anyway, let's try some `partial application`.

`partial application` is a way to specialize functions. In case you know how `Object Oriented Programming` and inheritance works in principle, you can consider this an analog to inheritance. We are simply taking something generic and making it more specific.

Instead of `map` I will want to end up with `johnsonMap` in this case. It will take a list of names and return a list of johnsoned names. Simple as that. As it happens ES4 provided us the perfect function for this purpose. It is also known as [bind](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind). There are shims available for less fortunate browsers.

The way it works is very simple. As you might guess from its name, it binds the values of function arguments to those given. In our case we can end up with something like this given we use the `map` definition above. This should explain why I prefer to have that callback argument as the first.

```js
var johnsonMap = map.bind(undefined, function(n) {return n + ' Johnson';});

johnsonMap(['Joe', 'Jack', 'Jill']); // should yield the same as above
```

What's up with that first parameter? This brings us one of the perhaps confusing aspects of JavaScript. This concept is also known as `this`. Confused yet?

> Sometimes you might want to bind `console.log`. Perhaps a bit counterintuitively just `console.log.bind(undefined, 'prefix: ')` won't work. Instead you will need to provide `console` as context like this: `console.log.bind(console, 'prefix: ')`.
