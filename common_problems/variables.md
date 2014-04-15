# Variables and Arguments are `undefined` by Default

As you have probably noticed so far, JavaScript allows a lot, perhaps too much by default. You will likely bump into this problem when dealing with variables and function arguments. In case those are provided, they will `undefined` by default. Sometimes this is a good thing, sometimes not. The worst thing is that you may end up with silent failures. As such it is one possible source of errors and hard to trace issues.

You may try to introduce some rigidity to your code using tooling such as [annotate](https://github.com/bebraw/annotate) (my own library) or just use a dialect, such as [TypeScript](http://www.typescriptlang.org/), that provides extra rigidity. The exact choice depends on your needs. I am actually curious to know how you have solved the issue (or is it an issue at all).

