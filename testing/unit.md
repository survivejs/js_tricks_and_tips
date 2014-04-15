# Unit Testing

Now that we have a function we can test with, lets define a couple of `unit tests` for a function known as `title`. You may recognize it from some other languages you have used before. Strangely vanilla JavaScript doesn't come with an implementation. So it is up to us to step up to the plate and remedy this vile omission. You can see a specification of sort below.

```js
function title(s) {}

assert(title('HELLO WORLD!') === 'Hello World!');
assert(title('Hello world!') === 'Hello World!');
assert(title('hi') === 'Hi');
assert(title() === undefined);
```

As you can see `title` is simply a function that converts the first character of each word into a uppercase one while the remaining characters will remain lowercase. Now would be a good chance to go and implement it. Or if this is trivial and below your skills, consider the solution below:

```js
function title(s) {
    // idea: split, set first to upper return joined
    var capitalize = function(k) {
        return k[0].toUpperCase() + k.slice(1).toLowerCase();
    };

    return s && s.split(' ').map(capitalize).join(' ');
}
```

It is likely your implementation will differ from mine somehow. As you have probably noticed so far I really like to use functional features of JavaScript. You can find a `map` there. I also used `&&` (and) to deal with possible invalid `s`.

The point of this little exercise was to demonstrate the usefulness of tests. Granted the tests weren't as good as they could have been and the implementation was sort of trivial. Still, I hope you can see the value. This was an example of `unit testing`. I have coined the other type of testing that complements this well as `generative testing`. It is a perhaps underappreciated way of testing that can reveal issues you might not be able to detect otherwise.
