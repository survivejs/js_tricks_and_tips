# Generative Testing

Unit tests are just that, units. Each unit test tests a specific thing. What if we forget to write a test? How do we know which unit tests to write and when? Let's just say experience helps in these things. Fortunately there are some ways that complement this well and allow us to overcome some of the weaknesses.

What if we defined the tests of `title` is a bit different way? First of all we know intuitively it makes sense to pass only Strings to `title`. I also mumbled something about the fact that each word has to begin with an uppercase character whereas the remained must be lowercase. By combining these observations we can end up with something quite interesting. A way to test our little function in a `generative` manner.

As I don't want to explain how to build the testing tools, I will rather use some experimental tools of my own. The most important one of these is simply known as [annotate](https://github.com/bebraw/annotate). It is a tool that allows you to attach annotations, and more importantly, invariants to your functions. I've annotated `title` below.

```js
var title = annotate('title', 'Returns given string in a title format.')
    .on(is.string, function(str) {
        ... // original implementation goes here
    }).satisfies(is.string);
```

I use another utility, [annois](https://github.com/bebraw/annois), to define that the function input is a string. Besides this `precondition` I defined a `postcondition` to make sure that you will get a string out as well. This might remind you of Eiffel's concept of [Design by Contract](http://en.wikipedia.org/wiki/Design_by_contract). Congratulations! If not, don't worry. You'll see what the fuzz is about in a bit, literally.

Currently the value of what we're doing might seem a bit dubious. We just ended up with more code. That was not the point, though. In order to benefit from the extra detail, we'll need to add second part. An external invariant. Consider the definition below.

```js
fuzz(title, function(op, str) {
    var parts = op(str).split(' ');

    return parts.map(fst).map(isUpper).filter(id).length == parts.length;
});

function fst(a) {return a[0];}
function isUpper(a) {return a === a.toUpperCase();}
function id(a) {return a;}
```

`fuzz` is a special kind of function. It uses our function preconditions and the defined invariant to construct tests. It will do its best to try to invalidate it. Can you see how much powerful this new test of ours is?

In case you are interested in this sort of testing, check out my testing tool, [annofuzz](https://github.com/bebraw/annofuzz), that implements this idea.
