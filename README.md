Try STCK
========

This is the repo for a webpage running STCK in the browser. Fable is used in order to transpile the interpreter from F# to JavaScript. [Try it live here](http://trystck.herokuapp.com/).

The browser REPL-framework is borrowed from [WebREPL](https://github.com/tormaroe/webrepl) by Torbjørn Marø. Huge kudos to him! Check out his [blog-post](http://blog.kjempekjekt.com/2013/02/22/webrepl-en-javascript-basert-kommandolinje/) about WebREPL as well.


Installation
------------

You'll need:
* [Node](https://nodejs.org/en/download/package-manager/) (v4.4 or higher)

    npm install
    npm start


Build interpreter from source
-----------------------------

This step is optional, and is only needed if you want to update the F# implementation of the STCK interpreter

* [Fable](https://fable-compiler.github.io/) - optional
* An [F# compiler](http://fsharp.org/use/linux/) (V4.0 og higher) - optional

On Ubuntu:

    chmod +x build.sh
    ./build.sh

On other plattforms you're on your own :-)
