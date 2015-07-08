var fs = require('fs');
var path = require('path');

var jwt = require('jwt-simple');

var fixtures = require('./fixtures.json');

var output = path.join(__dirname, 'fixtures-encoded.json');

var tokens = {};
for (var key in fixtures) {
  var fixture = fixtures[key];
  tokens[key] = {
    token: jwt.encode(fixture.payload, fixture.secret),
    payload: fixture.payload
  };
}

fs.writeFile(output, JSON.stringify(tokens, null, 2), function(err) {
  if (err) {
    process.stderr.write(err.message + '\n');
    process.exit(1);
  }
});
