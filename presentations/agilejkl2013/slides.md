title: What's in Store?
class: big
build_lists: true

- Web Development Strategies
    * How Did We Get Here
    * Where Are We Now
    * Where Are We Headed
- JavaScript Tricks
    * Node.js
    * Development Tools
    * Structuring Code
    * Finding Libraries
    * Testing
- Phew
    * Surprise!

---

title: Web Development Strategies
class: segue dark nobackground

---

title: Strategy for Goldfishes
notes: ["Just one way to go"]

![Strategy](images/strategy.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/hikingartist/3000884576">HikingArtist.com</a> (CC BY-NC-ND) </footer>

---

title: Strategy for the Rest of Us
notes: ["About what, not how", "From A (now) to B (future)"]

![Strategy in a Nutshell](images/strategysimple.png)

---

title: How Did We Get Here
class: segue dark nobackground

---

title: Ten Days to JavaScript
class: big
build_lists: true
notes: ["Even though developed in a hurry, came out well"]

* 1995 - Brendan Eich's ten days &rarr; Mocha
* Known as LiveScript till the marketing folks changed the name
* Even though has Java in name, completely different
* Influence of Java 1.0 visible mainly in Math and Time modules
* Prototypal inheritance a lá Self
* Dynamic, flexible, lambdas
* Scheme in disguise - See [The Little JavaScripter](http://www.crockford.com/javascript/little.html) by Crockford

---

title: A Bit of JavaScript
notes: ["Partial application"]

<pre class="prettyprint" data-lang="javascript">
var helloAgileJkl = hello.bind(undefined, 'AgileJkl!');

helloAgileJkl();

function hello(target) {
    console.log('Hello ' + target);
}

// or could just
<b>console.log('Hello AgileJkl!');</b>
// to avoid over-engineering!
</pre>

---

title: Web - From Documents to Applications
class: big
build_lists: true
notes: ["Documents to applications to documents again?"]

- Web as a Document Platform
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

title: JavaScript Has Traction
notes: ["X: number of projects on GitHub", "Y: number of tags on Stack Overflow"]

![Traction](images/redmonk.png)

<footer class="source"><a href="http://redmonk.com/sogrady/2013/02/28/language-rankings-1-13/">Redmonk</a></footer>

---

title: Crockford
notes: ["Rediscovered the language", "The good parts", "JSLint"]

![Crockford](images/crockford.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/equanimity/4206032023/">superfluity</a> (CC BY-NC-SA)</footer>

---

title: The Good Parts vs. The Rest
notes: ["A subset will do"]

![Good vs. Rest](images/goodvsrest.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/nathansmith/4704268314/">Oльга + Haфaн (CC BY)</a></footer>

---

title: Recap
class: big
build_lists: true

* JavaScript, an unlikely winner
* Language of the web
* More powerful than it seems
* Web isn't just about documents, now applications too

---

title: Where Are We Now
class: segue dark nobackground

---

title: Elements of Web Applications

![Elements](images/elements.png)

---

title: Logic
class: segue dark nobackground

---

content_class: flexbox vcenter bigText

# JavaScript

---

title: CoffeeScript

<iframe src="http://coffeescript.org/"></iframe>

---

title: Dart

<iframe src="http://www.dartlang.org/"></iframe>

---

title: TypeScript

<iframe src="http://www.typescriptlang.org/"></iframe>

---

title: And many others
content_class: flexbox vcenter bigText
notes: ["+ some other languages on the backend"]

# [altJS](http://altjs.org/)

---

title: Markup
class: segue dark nobackground

---

content_class: flexbox vcenter bigText

# HTML

---

title: Jade
notes: ["Resembles YAML", "Primarily for backend-side"]

<iframe src="http://jade-lang.com/"></iframe>

---

title: Mustache
notes: ["Logicless"]

<iframe src="http://mustache.github.io/"></iframe>

---

title: Handlebars
notes: ["Extends Mustache"]

<iframe src="http://handlebarsjs.com/"></iframe>

---

title: Transparency
notes: ["Utilizes HTML markup!", "Primarily for client-side"]

<iframe src="http://leonidas.github.io/transparency/"></iframe>

---

title: Styling
class: segue dark nobackground

---

content_class: flexbox vcenter bigText

# CSS

---

title: LESS

<iframe src="http://lesscss.org/"></iframe>

---

title: SASS

<iframe src="http://sass-lang.com/"></iframe>

---

title: Twitter Bootstrap
notes: ["Based on LESS", "Responsive", "Columns", "Widgets"]

<iframe src="http://twitter.github.io/bootstrap/"></iframe>

---

title: Zurb Foundation
notes: ["Based on SASS", "Mobile first", "Columns", "Widgets"]

<iframe src="http://foundation.zurb.com/"></iframe>

---

title: Data
class: segue dark nobackground

---

title: Data
class: big
build_lists: true

* Usually handled with a backend or external services (Disqus for comments for example)
* RESTful interfaces (client-side MVC)
* Local caching (localStorage ie.)
* Offline usage (replication, PouchDB)

---

title: Big Data
notes: ["As in social graph"]

![Static Architecture](images/bigdata.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/89334594@N07/8450190120/">infocux Technologies (CC BY-NC)</a></footer>

---

title: Recap
class: big

> Logics are violet

> Markups are blue

> Styling is sweet

> And so is data

---

title: Where Are We Headed
class: segue dark nobackground

---

title: Enlightenment

![Enlightenment](images/enlightenment.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/michaelheiss/452908317/">michael.heiss</a> (CC BY-NC-SA)</footer>

---

![Rage](images/rage.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/augie/77419568/">Augie Schwer</a> (CC BY-SA)</footer>

---

![MacGyver](images/macgyver.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/59023810@N00/455252569/">letmehearyousaydeskomdeskom</a> (CC BY-SA)</footer>

---

title: Shim
class: big

> a thin often tapered piece of material (as wood, metal, or stone) used to fill in space between things (as for support, leveling, or adjustment of fit)

![Shim](images/shim.jpg)

<footer class="source"><a href="http://www.merriam-webster.com/dictionary/shim">Merriam-Webster</a></footer>
<footer class="source"><a href="http://www.flickr.com/photos/7357861@N03/2339001640/">esagor</a> (CC BY-NC)</footer>

---

title: caniuse.com

<iframe src="http://caniuse.com/"></iframe>

---

![IE](images/ie.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/46307289@N00/2093478809/">T.R.G.</a> (CC BY-NC-SA)</footer>

---

title: Rise of the Mobile
class: segue dark nobackground

---

title: Android
class: big

![Terminator](images/terminator.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/19953384@N00/3750802591/">San Diego Shooter</a> (CC BY-NC-ND)</footer>

---

content_class: flexbox vcenter bigText

## Firefox OS, Jolla etc.

---

![PhoneGap](images/phonegap.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/44124462151@N01/4923953409/">Brian LeRoux</a> (CC BY-NC-SA)</footer>

---

title: Native vs. HTML5
class: big
build_lists: true

* Native apps still have their advantages
* JS is a good alternative for prototyping
* Available technology keeps maturing
* And we'll likely see better platform support

---
title: Web Architectures
class: segue dark nobackground

---

title: Blog (Static Site)

![Static Architecture](images/staticarch.png)

---

title: JSter (Portal)

![Traditional Architecture](images/tradarch.png)

---

title: Future JSter?

![Modern Architecture](images/modernarch.png)

---

title: Other Considerations
class: big
build_lists: true

* What belongs to server, what to client and why (business goals)
* [Client-side MVC is not a silver bullet](http://mir.aculo.us/2013/02/26/client-side-mvc-is-not-a-silver-bullet/)
* [Basecamp's experiences](http://37signals.com/svn/posts/3112-how-basecamp-next-got-to-be-so-damn-fast-without-using-much-client-side-ui) (hint: pushState, aggressive caching, minimal client)
* Synchronization, offline-usage (mobile apps), skills, time, budget...
* A bit like fashion. New techs come and go. Different answer each time you ask.
* Up and coming? Mixed approaches. Examples: [Meteor](http://meteor.com/), [Derby](http://derbyjs.com/), [mojito](http://developer.yahoo.com/cocktails/mojito/), [rendr](https://github.com/airbnb/rendr)

---

title: Recap
class: big
build_lists: true

* Web dev is as hard as you make it
* Especially on the bleeding edge
* Fortunately a bit of tape fixes anything
* Mobile on the rise, native HTML5 apps not mainstream yet
* Web architectures - from monoliths to distributed

---

title: JavaScript Tricks
class: segue dark nobackground

---

title: Node.js
class: segue dark nobackground

---

title: Trends
notes: ["Development started in 2009 by Ryan Dahl", "Enabled by V8"]

![Trends](images/nodetrend.png)

<footer class="source"><a href="http://goo.gl/NBFnd">Google Trends</a></footer>

---

title: Packages per Year
class: big
build_lists: true

* Python: 29,720 packages / 22 years = *1351* packages per year
* Ruby: 54,385 packages / 18 years = *3022* packages per year
* Node.js: 26,966 packages / 4 years = *6742* packages per year

<footer class="source"><a href="http://caines.ca/blog/programming/the-node-js-community-is-quietly-changing-the-face-of-open-source/">Gregg Gaines</a></footer>

---

title: Server Using Callbacks
class: big
build_lists: true

<pre class="prettyprint" data-lang="javascript">
var http = require('http');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello AgileJkl!\n');
    }
).listen(8000);
</pre>

- Short and sweet
- [Express](http://expressjs.com/) is very popular for more complex cases

---

title: Server Using EventStreams
class: big
build_lists: true

<pre class="prettyprint" data-lang="javascript">
var http = require('http');

var s = new http.Server();

s.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello AgileJkl!\n');
});

s.listen(8000);
</pre>

* Viable alternative to callbacks at times
* More info at [Node.js: Patterns and Opinions](https://dl.dropboxusercontent.com/u/3685/presentations/node-patterns/node-patterns.pdf) by @izs (the Node guy)

---

title: Recap
class: big
build_lists: true

* Excellent for prototyping
* Strong ecosystem thanks to [NPM](https://npmjs.org/)
* Develops at a blistering pace

---

title: Development Tools
class: segue dark nobackground

---

content_class: flexbox vcenter bigText

## Vim, Emacs, Sublime Text, WebStorm...

---

title: Chrome Inspector
class: big
build_lists: true

![Chrome Inspector](images/inspector.png)

* See also [Firebug](http://getfirebug.com/)

<footer class="source"><a href="https://developers.google.com/chrome-developer-tools/">Chrome DevTools</a></footer>

---

title: LiveReload

<iframe src="http://livereload.com/"></iframe>

---

title: JSLint
class: big
build_lists: true

<iframe src="http://jslint.com/"></iframe>

* See also [JSHint](http://jshint.com/)

---

title: jsFiddle
class: big
build_lists: true

<iframe src="http://jsfiddle.net/"></iframe>

* Others: [jsbin](http://jsbin.com/), [jsdo.it](http://jsdo.it/), ...

---

title: Cloud9 IDE
class: big

<iframe src="https://c9.io/"></iframe>

---

title: Recap
class: big
build_lists: true

* Traditional editors and IDEs are fine
* Additional tooling available, use it
* Future in the web?

---

title: Structuring Code
class: segue dark nobackground

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

title: Recap
class: big
build_lists: true

* No official module system yet (ES6?)
* Many alternatives (AMD, CJS etc.)
* browserify looks promising (NPM!)

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

title: Recap
class: big
build_lists: true

* No need to just Google it
* Package managers (esp. NPM) make your life easier
* Avoid NIH and use existing solutions

---

title: Testing
class: segue dark nobackground

---

title: Unit Testing
class: big
build_lists: true

<pre class="prettyprint" data-lang="javascript">
assert(title('HELLO WORLD!') === 'Hello World!');
assert(title('Hello world!') === 'Hello World!');
assert(title('hi') === 'Hi');
assert(title() === undefined);

function title(s) {
    return s && s.split(' ').map(capitalize).join(' ');
}

function assert(s) {
    if(!s) throw new Error('Assertion failed!');
}
</pre>

* Popular alternatives: [Jasmine](http://pivotal.github.io/jasmine/) (BDD), [Mocha](http://visionmedia.github.io/mocha/), [QUnit](http://qunitjs.com/)

---

title: Fuzz Testing

<pre class="prettyprint" data-lang="javascript">
// function to test, note annotation
var title = annotate('title', 'Returns given string in a title format.')
    .on(is.string, function(s) {
        return s && s.split(' ').map(capitalize).join(' ');
    }).satisfies(is.string);

// testing an invariant
fuzz(title, function(op, str) {
    var parts = op(str).split(' ');

    return parts.map(fst).map(isUpper).filter(id).length == parts.length;
});
</pre>

* Up and coming (hopefully)

<footer class="source"><a href="https://github.com/bebraw/annofuzz">bebraw/annofuzz</a></footer>

---

title: Testling

<iframe src="http://ci.testling.com/"></iframe>

---

title: Travis

<iframe src="http://about.travis-ci.org/"></iframe>

---

title: Browserling

<iframe src="https://browserling.com/"></iframe>

---

title: Browserstack

<iframe src="http://www.browserstack.com/"></iframe>

---

title: Chaos Monkey

![Chaos Monkey](images/chaosmonkey.png)

<footer class="source"><a href="">Jeff Atwood - Working with the Chaos Monkey</a></footer>

---

title: AB Testing
notes: ["Optimizely"]

![Apple and Orange](images/appleorange.jpg)

<footer class="source"><a href="http://www.flickr.com/photos/26176646@N04/2492945625/">TheBusyBrain</a> (CC BY)</footer>

---

title: Recap
class: big
build_lists: true

* Test your JS
* Browser differences bring their own challenge
* Future in continuous integration (Travis and co.)
* Fail constantly to avoid failure

---

title: Conclusion
class: segue dark nobackground

---

title: Conclusion
class: big
build_lists: true

* JS - the most valuable language you don't know yet
* A target for tool and language development
* Not without its quirks but still manageable
* The most important language of this decade?

---

title: Survive JS - The Guide

<iframe src="http://survivejs.com/"></iframe>
