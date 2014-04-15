# How to Characterize?

So how would you characterize JavaScript? Even though it looks a bit like Java or C due to bracing there it is actually an implementation of a couple of powerful languages in disguise. These languages are a variant of Lisp known as Scheme and Self. From former JavaScript inherited some of its functional programming capabilities whereas latter gave it prototypal inheritance system which in some ways can be considered superior to classical one used by languages such as Java.

> It is possible to mimic the more commonly used one with a little effort, though. As a result there are dozens of implementations around. It doesn't take a genius to realize that this isn't particularly nice. ES6 aims to various implementations and will provide a single pattern to use.

Particularly JavaScript's functional capabilities make it in some ways an exceptional language. For a long while this power was well hidden, or at least not that well recognized. The language was improved in this regard in well supported ES4 (there are shims for older browsers). ES6 will take this a notch further.

## Yes, There Are Ifs Too

Of course JavaScript comes with the usual imperative programming constructs (for, while, if, etc.) you might expect. There is also some legacy in form of Date and Math modules inherited from Java 1.0. There are some custom features even (`with` comes to mind) though it is better to avoid some of those and just to stick to a solid subset.

> You can get plenty of things done even with a well selected subset of the language. You will avoid some pitfalls and keep your code readable even for less superior programmers as you. Granted it is perhaps a bit more verbose than some might like.

## Fast and Loose

Typing-wise JavaScript has been typed very loosely. Functions are treated as first class citizen. And everything is an object of course. It will take some getting used to. It isn't as bad as it might sound. Although it is one of those features that makes it very easy to shoot oneself into a foot. This is a risk that you can mitigate, however. Learn the language and use various tools. As usual with dynamically typed languages, testing is a very good idea.

Being loosely typed doesn't mean the language cannot perform, on the contrary. Particularly the last few years have yielded significant increases in performance. One key factor in this has been Google's [V8 Engine](https://code.google.com/p/v8/). In fact that particular engine powers popular [Node.js](http://nodejs.org/) platform and is likely one of the reasons why it has become so popular.

Talks about JavaScript being slow are nonsense. Depending on your background it might feel intuitively so but fortunately it isn't. There was definitely a time when this was true but that isn't the case anymore.
