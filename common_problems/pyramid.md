# Pyramid of Doom

Even though callbacks are powerful, they come with a price. It is very easy to end up in a situation where you have nested callbacks like in [the abbreviated example by @adamghill](http://adamghill.com/2012/12/02/callbacks-considered-a-smell/) below:

```js
var db = require('./db/callbackDb');

db.set('key1', 'value1', function(err) {
    if(err) throw err;

    db.set('key2', 'value2', function(err) {
        if(err) throw err;

        db.set('key3', 'value3', function(err) {
            if(err) throw err;

            var str = '';
            db.get('key1', function(err, value) {
                if(err) throw err;

                str += value + ' - ';

                console.log(str);
            });
        });
    });
});
```

That doesn't look particularly nice. In fact callbacks can be considered an `imperative` language construct. A `declarative` construct such as a `promise` gives more indirect control and helps to cut down the amount of code. Consider the following abbreviated example (again, original work of @adamghill):

```js
var db = require('./db/promisesDb');
var str = '';

db.set('key1', 'value1').then(function(key) {
    return db.set('key2', 'value2');
}).then(function() {
    return db.set('key3', 'value3');
}).then(function() {
    return db.get('key1');
}).then(function(value) {
    str += value + ' - ';

    console.log(str);
})
```

As you can see, the pyramid has been eliminated. The idea of `promises` is to represent a value in the future. Rather than defining `when` as in the imperative world, you describe `then` that is triggered as the value has become available. It comes with a price, though. You will have to instrument the underlying code to support the scheme.

Besides this it is possible to tame the pyramid by using custom events or control flow tools. Reorganizing the code may be beneficial as well. You can find full examples of these at [@adamghill's excellent blog post on the topic](http://adamghill.com/2012/12/02/callbacks-considered-a-smell/).

It is still bit of a wild west out there. In addition to these approaches, there is a whole paradigm known as `Functional Reactive Programming`. In fact `promises` are just a subset of that. [Presentation slides](http://eamodeorubio.github.io/tamingasync) by @eamoderorubio shows how to go beyond promises. Best practices are still forming. But there are some very good solutions available already.
