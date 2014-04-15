# Build Systems

Eventually you'll end up needing to set up some kind of a build system for your project. You'll likely want to use a different build for development and production for instance. There also may be multiple targets ranging from mobile to desktop (each might have different dependencies).

In addition you might have some extra dependencies (such as some CSS precompiler) in your project. So during development you might need to run the precompiler in a `watch` mode. And you might want to have `LiveReload` server running as well.

As you can see it can get quite complicated, fast. This is the reason why multiple build systems have emerged. [Grunt](http://gruntjs.com/) is perhaps the most popular, or at least visible, option for Node.js. You can definitely use it on a pure frontend project. Node.js just happens to be the platform it runs on.
