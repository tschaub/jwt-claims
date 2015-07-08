# `jwt-claims`

Parse claims from a JWT payload.

    npm install jwt-claims

Example:

```js
var decode = require('jwt-claims');

var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
    'eyJuYW1lIjoi0JvQtdC-0L3RgtC40LkiLCJudW0iOjQyLCJib29sIjpmYWxzZX0.' +
    'icqeYQUXd1l84wHc-vIzVXOQx7DI4V2H-YV34su7cuY';

var claims = decode(token);

console.log(claims);
// { name: 'Леонтий', num: 42, bool: false }
```

Note that parsing the claims from a JWT payload does not mean that the token is valid.  You can use something like [`jwt-simple`](https://www.npmjs.com/package/jwt-simple) to create new tokens and validate existing ones.  This module is meant to be used in places where you don't want to share the secret used to mint the token (e.g. a browser).

The `jwt-claims` package works in Node and browsers using a CommonJS module loader (e.g. [Browserify](http://browserify.org/) or [Webpack](http://webpack.github.io/)).  Tested on Node 0.12, Chrome, Firefox, and IE 11.

[![Current Status](https://secure.travis-ci.org/tschaub/jwt-claims.svg?branch=master)](https://travis-ci.org/tschaub/jwt-claims)
