# Properties for Fun and Profit

In the good old world of Java we used to have getters and setters. And you can of course have those in JavaScript as well in case you really want to. Since I came by properties in Python I've considered them ugly. Properties are a bit like attributes except they may invoke some computation or be derived based on other attributes. Since that likely sounded very vague and confusing it's a good time to discuss a concrete example.

Since I'm in an overengineering mood, let's implement an area calculator in a form of Object. It will have three attributes: width, height and area. `area` is something that is derived based on `width` and `height` and will be read-only since I don't feel comfortable changing `width` and `height` as `area` changes.

As support for this sort of programming is still a bit sketchy in the world of JavaScript, let's "implement something ourselves as save some money while at it"(r). I think the interface for our mighty `area` object might look like this based on our specification:

```js
var f = field({
    width: 5,
    height: 10
});

console.log(f.width(), f.height(), f.area()); // 5 10 50

f.width(10);

console.log(f.area()); // 100
```

I know having to use that extra `()`'s is bit of a bore. But it is the price of this particular scheme. In case you feel like, go ahead and implement the specification. If it is still too much to handle, consider my implementation below:

```js
function field(o) {
    o = o || {};

    var ret = {
        area: function() {
            return ret.width() * ret.height();
        }
    };

    property(ret, 'width', o.width || 0);
    property(ret, 'height', o.height || 0);

    return ret;
}

function property(o, name, val) {
    var prop = '_' + name;

    o[prop] = val;

    o[name] = function(v) {
        if(v) o[prop] = v;
        else return o[prop];
    };
}

var f = field({
    width: 5,
    height: 10
});

console.log(f.width(), f.height(), f.area()); // 5 10 50

f.width(10);

console.log(f.area()); // 100
```

This is one possible implementation out of many. You could for instance play around with `this` but as I mentioned earlier this isn't something I don't particularly personally like since it adds some unnecessary complexity in code and it might bite you later. Anyway, do as you like. Sometimes you just cannot avoid this.
