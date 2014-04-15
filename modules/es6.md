# ES6

ES6 should finally come with a module system. About time! It is actually possible to give the proposed approach a go already by using a [transpiler](https://github.com/square/es6-module-transpiler). Unfortunately the definition doesn't quite support all possible use cases well.

For instance it isn't possible to export a single function. This is a pattern you tend to see especially in the Node world. And micro modules require support for this sort of export. I really hope they fix this little omission. This would make it possible for me to write some of my library code using the definition and then transpile it to wanted targets (likely AMD and CommonJS).
