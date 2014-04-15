# Not All Things are Equal

`==` and `===` are common stumbling blocks especially for JavaScript beginners. It is important to know that `==` comparison coerces values whereas `===` does not. Just to give you an idea of what this means. Consider the following cases:

```
0 == '' // true
0 === '' // false
```

I know it might seem like a trivial detail but it is not. Used right it can be a useful feature. In worst case this behavior can introduce subtle and difficult to detect bugs.
