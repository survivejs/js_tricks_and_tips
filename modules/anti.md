# The Anti-Pattern

Before getting any further, consider the anti-pattern below. This is how people wrote JavaScript in the golden 90s. And they still write at times.

```js
<script src='jquery-current.js' type='text/javascript'></script>
<script src='sorttable.js'      type='text/javascript'></script>
<script src='scripts.js'        type='text/javascript'></script>
<script src='miniCalendar.js'   type='text/javascript'></script>
```

The main problem with this approach is that it really doesn't scale as your application does. Can you repeat after me "it's brittle"? Especially in team environment using this sort of approach is just asking for trouble.
