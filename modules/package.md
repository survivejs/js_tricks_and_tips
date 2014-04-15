# Package Managers

Having a module definition is just a part of the story. What's the point of having modules if you cannot share them, or better yet, use modules written by other people? This is where various package managers come in. On Node side of the fence the answer is simple, just use [NPM](https://npmjs.org/). On frontend side it becomes a bit trickier.

In case you use Browserify you can still use NPM. Problem solved! If you don't want to use NPM for some reason, there are plenty of alternatives. In practice I've found [Bower](https://github.com/twitter/bower) quite cool. They have a nice [site available for browsing packages even](http://sindresorhus.com/bower-components/). [component](http://component.io/) is yet another alternative. With a bit of digging you'll find plenty of more.

## Package Definition

Each of these systems will use some kind of a package definition. It is usually a JSON file which describes package metadata including dependencies. The package manager tool will be able to install the right dependencies based on this information.

> A word of warning! It is a very good idea to fix your dependencies to certain versions. This way the next you have to set up your application it is more likely to work than not. On very special occasions versions of libraries may have disappeared from the server (happened to me once). It is a good idea to prepare for this continuity as well. If you use Node, consider using a package such as [lockdown](https://npmjs.org/package/lockdown). Paranoia can be useful when it comes to this sort of things.

## Finding Modules

It can be a little bit hard to find modules you are after, especially on the frontend side. Besides NPM, Node guys might want to check out [node-toolbox](http://nodetoolbox.com/). It provides an alternative view to NPM data. On the frontend side you might want to consider [JSwiki](https://github.com/bebraw/jswiki/wiki), [JSter](http://jster.net/) or [JSDB](http://www.jsdb.io/) for instance. They are a bit different takes on the same subject. You'll find a few more over at JSwiki.
