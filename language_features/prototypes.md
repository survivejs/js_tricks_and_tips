# Prototypes are Phun?

As I have mentioned earlier JavaScript does not implement classical inheritance scheme "as is". Rather it provides something known as a prototypal scheme. Each object points to some prototype object. It is possible that the object itself shadows some functionality provided by this prototype one.

It is possible to build more complex relations based on this simple scheme. For instance you could model the classical scheme quite easily. If this topic interests you, I recommend checking out [Angus Croll's excellent post on the subject](http://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/).

> Back when [jQuery](http://jquery.com/) was still in early stages there used to be another popular library known as [Prototype](http://prototypejs.org/). As you might infer from its name, it injects some functionality into prototypes of certain commonly used objects. This was also one of the reasons why jQuery surpassed it in popularity. In short mucking up with those is just asking for trouble as it might lead to breakage in interesting places.

Personally I don't use prototypes a lot these days and rather tend to avoid them. The "new" keyword is one reason. In my view it's just unnecessary syntactical clutter. In practice you see both styles prevalent. An example of "newless" style I prefer may be found at [colorjoe](https://github.com/bebraw/colorjoe), a color picker I have developed.

In `colorjoe` I provide a couple of specialized versions of the colorpicker: colorjoe.rgb and colorjoe.hsl. There is a also a chaining syntax and ways to extend the system without having to modify the core code. It is an example of how to use the factory pattern.
