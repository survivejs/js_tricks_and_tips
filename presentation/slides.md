
title: Strategy for Goldfishes
class: nobackground fill

![Strategy](images/strategy.jpg)

<footer class="source">source: http://www.flickr.com/photos/32066106@N06/3000884576/, CC BY-NC-ND by HikingArtist.com</footer>

---

title: Strategy for the Rest of Us
class: nobackground fill
notes. ["About what, not how", "From A (now) to B (future)"]

TODO: from A to B

---

title: How Did We Get Here
class: segue dark nobackground

---

title: Ten Days to JavaScript
class: big
build_lists: true

- 1995 - Brendan Eich's ten days &rarr; Mocha
- Known as LiveScript till the marketing folks changed the name
- Even though has Java in name, completely different
- Influence of Java 1.0 visible mainly in Math and Time modules
- Prototypal inheritance a lá Self
- Dynamic, flexible, lambdas
- Scheme in disguise - See [The Little JavaScripter](http://www.crockford.com/javascript/little.html) by Crockford

---

title: A Bit of JavaScript

<pre class="prettyprint" data-lang="javascript">
var helloWorld = hello.bind(undefined, 'World!');

helloWorld();

function hello(target) {
    console.log('Hello ' + target);
}

// or could just console.log('Hello World!');
// way to over-engineer!
</pre>

---

title: Brief History of JavaScript
class: big
build_lists: true

- 1995 - Brendan Eich's ten days
- 1999 - ES3, modern baseline
- 2005 - AJAX
- 2008 - RIP ES4
- 2009 - ES5 - IE9+ + Modern browsers
- 2013 - ES6?

<footer class="source"><a href="http://brendaneich.github.io/Strange-Loop-2012/#/1">Brendan Eich at Strange Loop '12</a></footer>

---

title: JavaScript Rage

![Rage](images/rage.jpg)

<footer class="source">source: http://www.flickr.com/photos/augie/77419568/, CC BY-SA by Augie Schwer</footer>

---

title: Crockford

![Crockford](images/crockford.jpg)

<footer class="source">source: http://www.flickr.com/photos/equanimity/4206032023/, CC BY-NC-SA by superfluity</footer>

---

title: Where Are We Now
class: segue dark nobackground

---

title: Node.js
class: big
build_lists: true
notes: ["testing", "and then some"]

- Established
- NPM
- Full stack
- When to use

---

title: Responsive Web Design
class: big

<iframe src="http://finecitizens.com/defineResponsive/"></iframe>

---

title: Where Are We Headed
class: segue dark nobackground

---

title: Enlightenment

![Crockford](images/enlightenment.jpg)

<footer class="source">source: http://www.flickr.com/photos/michaelheiss/452908317/, CC BY-NC-SA by michael.heiss</footer>

---

title: Back to Reality
class: segue dark nobackground

---

title: Code Example

Media Queries are sweet:

<pre class="prettyprint" data-lang="css">
@media screen and (max-width: 640px) {
  #sidebar { display: none; }
}
</pre>

---

title: Once more, with JavaScript

<pre class="prettyprint" data-lang="javascript">
function isSmall() {
  return window.matchMedia("(min-device-width: ???)").matches;
}

function hasTouch() {
  return Modernizr.touch;
}

function detectFormFactor() {
  var device = DESKTOP;
  if (hasTouch()) {
    device = isSmall() ? PHONE : TABLET;
  }
  return device;
}
</pre>

---

title: Centered content
content_class: flexbox vcenter

This content should be centered!
