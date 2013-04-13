
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

title: Brief History of JavaScript
class: big
build_lists: true
notes: ["testing", "and then some"]

- 1995 - Brendan Eich's ten days &rarr; Mocha
- Known as LiveScript till the marketing folks changed the name
- Java is to JavaScript as ham is to hamster
- 1999 - ES3, modern baseline
- 2005 - AJAX
- 2008 - RIP ES4
- 2009 - ES5 - IE9+ + Modern browsers
- 2013 - ES6?

<footer class="source"><a href="http://brendaneich.github.io/Strange-Loop-2012/#/1">Brendan Eich at Strange Loop '12</a></footer>

---

title: Where Are We Now
class: segue dark nobackground

---

title: Responsive Web Design
class: big

<iframe src="http://finecitizens.com/defineResponsive/"></iframe>

---

title: Where Are We Headed
class: segue dark nobackground

---

title: 1990s
class: nobackground fill

![MTV](http://farm5.staticflickr.com/4065/4489637577_ce553503d0_z.jpg)

<footer class="source">source: http://www.flickr.com/photos/44302262@N08/4489637577/</footer>

---

title: Big Title Slide
class: title-slide

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
