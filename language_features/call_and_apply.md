# Understanding `call` and `apply`

These two might remind you of that beautiful `bind`. As it happens these three are siblings. `call` is the ugly one and I tend to favor `apply` over it. These two functions allow you to... wait for it... call functions. What's the point you might ask?

Suppose you are writing a test runner. You might have some kind of a function definition for the tests. It could be an Object containing name, test function pairs for instance. You will need some way to run them. This is where these guys I just introduced you to come in.

The difference between the nice `apply` and the less nice `call` is that the former accepts the parameters within an array while the latter just accepts them. It reminds me of `bind` this way. Both take a context parameter first and then do their thing after.

As I don't feel like writing an entire test runner here, I'll leave it as an exercise to the reader. Just to make everything clear, consider the following `apply` of console.log.

```js
console.log.apply(console, ['you da js champ!']);
```

You can probably guess what happens there. If not, it's still not too late to change the career.
