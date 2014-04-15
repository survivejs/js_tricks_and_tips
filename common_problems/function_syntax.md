# Function Syntax is Cumbersome

It can be a bit boring to write that `function` always, particularly if you enjoy using anonymous functions. Speaking of which it may be handy to name your functions even if you use them as callbacks like below:

```js
$('.clickety').on('click', function clickety() {
    console.log('Clickety click');
});
```

I am leveraging jQuery selector syntax here. When an element with class "clickety" is clicked, it should print "Clickety click" to the console.

Of course this doesn't solve the original issue I was complaining about. In fact we have even more noise in the code right now. In this particular case we might be able to rewrite the function using bind using `console.log.bind(console, 'Clickety click')`. Even that can be optimized further. Lazy ones of us would just rewrite console.log (`console.log = console.log.bind(console)`) and then define `partial` that internally uses `bind`. In this case you may want to leverage `arguments` feature discussed at the earlier chapter.

If you are willing to accept the visual noise, you can most likely configure your editor to help you write functions faster. Ie. in vim you might want to just define `abbr fn function` at your .vimrc. I am certain there are some nicer solutions around as well.

[sweet.js](http://sweetjs.org/) provides another solutions: macros. It allows you to replace the `function` keyword with `def`. Using `sweet` introduces a new dependency to your project and you will also need to compile your code to real JavaScript before you are able to use it in your browser. This isn't as big a problem as it sounds, though. You will most likely end up doing some sort of compilation pass anyway, particularly if your project is a big one. Besides trivial stuff like this macros allow you to implement way more complex features on top of the core language. Whether or not that is a good idea is debatable, though.

There might be something better in sight thanks to ES6. This something is also known as "fat arrow". As [illustrated by Angus Croll](http://javascriptweblog.wordpress.com/2012/04/09/javascript-fat-city/), the syntax is quite simple. Consider the examples below I borrowed from his blog post:

```js
var fat1 = () => {};
var long1 = function() {};

// return the square
var fat2 = x => x * x;
var long2 = function(x) {return x * x};

// add two numbers
var fat3 = (a, b) => a + b;
var long3 = function(a, b) {return a + b};

// return a new array containing the squares of the original...
[1, 2, 3, 4, 5].map(x => x * x); // [1, 4, 9, 16, 25]
```

Now try thinking what the examples above would look like in vanilla JavaScript. Yes, it would be quite verbose. Sometimes you can hide the complexity behind utility functions. `bind` comes in handy yet again.

This is still very bleeding edge. The specification is till work in progress. As things start to settle down I expect that people will begin to use transpilers (ES6 -> ES4) that allows them to use the subset of functionality they want. [Esprima](http://esprima.org/) is one popular starting point for this type of work.

You can try to parse it by hand as I did in [mojs](https://github.com/bebraw/mojs) but that is an approach I just cannot recommend. You will want to use something that provides AST level support and allows you to hack in the level of a language definition.

