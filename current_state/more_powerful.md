# More Powerful, More Standard

During the last few years we've progressed a lot on the browser side. JavaScript engines have become more powerful. This trend was initiated by Google's Chrome and has since led to significant improvements in performance. Standards are supported better. Thanks to Microsoft and its initiatives with Internet Explorer 9 and 10 they've started to catch up with the others and in some ways gone past even. That is a good trend for us web developers as gradually we may start to ditch legacy solutions needed by antiquated browsers such as Internet Explorer 6.

There is still a lot to be done. In case you decide to support only a limited set of modern browsers, you are in luck. At times you may use specific [shims](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills) in order to be able to use newer features at older browsers. I often use [caniuse.com](http://caniuse.com/) to see whether or not I should use something yet and if so, how.

Sometimes you might want to use certain feature on certain device type while avoid using it on another. A good example of this is `hovering`. Given there is no hover state on mobile devices, it is definitely something you don't want to use there. [Modernizr](http://modernizr.com/) has been designed to solve this problem. It works on feature level and is a very good fit for this case.

In the olden days people used to check for specific browser. Generally this isn't considered a good idea given the browsers may fake their identifying information. So better not to use that unless you really know what you are doing.
