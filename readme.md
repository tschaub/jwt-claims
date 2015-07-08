# `jwt-claims`

Parse claims from a JWT payload.

    npm install jwt-claims

Example:

```js
var decode = require('jwt-claims');

var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
    'eyJuYW1lIjoi0JvQtdC-0L3RgtC40LkiLCJudW0iOjQyLCJib29sIjpmYWxzZX0.' +
    'icqeYQUXd1l84wHc-vIzVXOQx7DI4V2H-YV34su7cuY';

var claims = decode(str);

console.log(claims);
// { name: 'Леонтий', num: 42, bool: false }
```

[![Current Status](https://secure.travis-ci.org/tschaub/jwt-claims.svg?branch=master)](https://travis-ci.org/tschaub/jwt-claims)
