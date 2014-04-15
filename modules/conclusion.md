# Conclusion

I hope this chapter gave you some idea how to work with modules in JavaScript. The situation will likely change in the coming years especially on the frontend side. Even when ES6 type modules become supported on browser level some form of transpiling will have to be used to support older ones.

That said I think the approach you choose depends largely on your needs. AMD is quite alright for organizing larger projects. Its configuration isn't entirely trivial and sometimes you might run into issues with certain dependencies. Not all modules work that well with it by default. Those are more of special cases, though.

Personally I am very thrilled about the approach chosen by Browserify. It just feels, or at least looks, right. Again, its usefulness likely depends on type of a project.
