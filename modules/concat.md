# Concatenating to Victory

So what does a clever programmer do next? Concatenates. That's what a clever programmer does. Instead of having multiple scripts you will have just one entry point to your application like below.

```js
<script src='application.js' type='text/javascript'></script>
```

It is possible to merge this approach with above one especially if you want to load some resources from a CDN such as [jsDelivr](http://jsdelivr.com/). The advantage of doing this is that popular libraries, such as jQuery, can get loaded very fast as they are very likely in the browser cache already. As the old saying goes "Use the cache, Luke".

The approach isn't without its problems. Someone still has to write that concatenation script. And you probably want to load things in the right order or otherwise *bad things*&trade; will happen.

