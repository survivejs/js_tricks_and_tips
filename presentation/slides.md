
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

title: Web - From Documents to Applications
class: big
build_lists: true

- Web as Document Platform
    * 1995 - Brendan Eich's ten days
    * 1999 - ES3 (modern baseline), Mozilla established
- Improved Interactivity
    * 2005 - AJAX, dynamic loading (search for instance)
    * 2008 - RIP ES4, parts of HTML5 emerge, Chrome (V8) introduced
    * 2009 - ES5 (Modern browsers IE9 included), Chrome OS, Node.js
- Web as an Application Platform
    * 2012 - HTML5 well supported (interesting JS APIs)
    * 2013 - ES6?

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

title: Web Stacks
class: big
build_lists: true

- TODO: show possible stacks here ranging from pure static to something more JS driven

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

title: Front-end Frameworks
class: big
build_lists: true

- Twitter Bootstrap
- Zurb Foundation
- et. co.

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

title: Reality is Ugly
class: big
build_lists: true

- Ideally things "would just work" (tm)
- Unfortunately it's not that simple always
- Bleeding edge is bleeds for a reason
- Solutions
    * Shims
    * Better testing (ie. browserling, browserstack)
    * Reduced quality of service for older browsers
    * Dropping support altogether (encourage to switch browser)

---

title: Data-Driven Architecture of the Web
class: segue dark nobackground

---

title: Elements of Web Applications

TODO: image with logic, markup, representation, data

---

title: Logic
class: big
build_lists: true

- JavaScript
- Or language that compiles to JavaScript. Examples:
    * CoffeeScript
    * Dart
    * TypeScript
    * altjs.org

---

title: Markup
class: big
build_lists: true

- HTML
- Or language that compiles to HTML. Examples:
    * HAML
    * Jade
    * Handlebars
    * Mustache

---

title: Representation
class: big
build_lists: true

- CSS
- Or language that compiles to CSS. Examples:
    * LESS
    * SASS (compass, stylus?)

---

title: Data
class: big
build_lists: true

- Served through backend(s) usually in JSON
- Easy to use in JavaScript this way
- RESTful interfaces

---

title: Development Strategies
class: segue dark nobackground

---

title: Evolution of Development Process
class: big
build_lists: true

- dev -> test -> UX (waterfall)
- test -> dev -> UX (TDD, BDD and such)
- UX -> test -> dev (Lean UX)

---

title: Development Approaches
class: big
build_lists: true

- Pretotyping
- Wireframes
- Plain paper and pen
- Just code it?

---

title: Validating Outcomes
class: big
build_lists: true

- AB-testing (ie. Optimizely)
- User testing
- WTFs per minute
- Plain old money (sales for instance)

---

title: Development Tooling
class: segue dark nobackground

---

title: Editors
class: big
build_lists: true

- Regular development: Plain old IDE or editor
- LiveReload
- Prototyping: Web based service (jsfiddle, jsbin)
- Future is in the web? Cloud9?
- Continous integration (travis and such)
- Browserify etc. (cross-browser issues)

---

title: Finding Libraries
class: segue dark nobackground

---

title: NPM

<iframe src="https://npmjs.org/"></iframe>

---

title: Bower

<iframe src="http://sindresorhus.com/bower-components/"></iframe>

---

title: JSwiki

<iframe src="http://jswiki.org"></iframe>

---

title: JSter

<iframe src="http://jster.net/"></iframe>

---

title: Structuring Code
class: segue dark nobackground

---

title: Current Status
class: big
build_lists: true

* No official module system (yet)
* Supposedly ES6 will bring one
* Still, it will remain as a compile target

---

title: The Anti-Pattern
class: big
build_lists: true

<pre class="prettyprint" data-lang="html">
&lt;script src='jquery-current.js' type='text/javascript'&gt;&lt;/script&gt;
&lt;script src='sorttable.js'      type='text/javascript'&gt;&lt;/script&gt;
&lt;script src='scripts.js'        type='text/javascript'&gt;&lt;/script&gt;
&lt;script src='miniCalendar.js'   type='text/javascript'&gt;&lt;/script&gt;
</pre>

* Each include has to be defined by hand
* Brittle and prone to error, especially with large codebases
* Does not encourage to modularity
* Hard to reuse

---

title: Concatenate Scripts
class: big
build_lists: true

<pre class="prettyprint" data-lang="html">
&lt;script src='application.js' type='text/javascript'&gt;&lt;/script&gt;
</pre>

* Old skool but works
* Less overhead at HTML
* Still, running into dependency order problem at concatenation
* Possible to complement by loading scripts (ie. jQuery) from a CDN
* Nevertheless a step forward

---

title: RequireJS and AMD + Bower
class: big
build_lists: true

<pre class="prettyprint" data-lang="html">
&lt;script data-main="scripts/main" src="scripts/require.js"&gt;&lt;/script&gt;
</pre>

<pre class="prettyprint" data-lang="javascript">
define(['jquery', './math'], function($, math) {
    return { // exports
        vector: function() {...}
    };
});
</pre>

* Modular, asynchronous approach
* Includes `define` overhead (possible to mimic Node.js convention, though)
* Optimizer resolves dependencies and creates build (loadable with Almond)
* Configuration complex at times

---

title: Browserify + NPM
class: big
build_lists: true

<pre class="prettyprint" data-lang="html">
&lt;script src='application.js' type='text/javascript'&gt;&lt;/script&gt;
</pre>

<pre class="prettyprint" data-lang="javascript">
var $ = require('jquery');
var math = require('./math');

exports.vector = function() {...};
</pre>

* Allows to use Node.js module convention (CJS)
* Better yet allows to hook into NPM ecosystem!
* Still fairly bleeding edge

---

title: Conclusions
class: segue dark nobackground

---

title: Conclusions

TODO

