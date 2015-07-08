var base64 = require('base64-js');

/**
 * Decode the claims in a JWT payload.
 * @param {string} token The JWT string.
 * @return {Object} The claims from the payload.
 */
function decode(token) {
  var payload = token.split('.')[1];
  switch (payload.length % 4) {
    case 0:
      break;
    case 2:
      payload += '==';
      break;
    case 3:
      payload += '=';
      break;
    default:
      throw new Error('Invalid base64 payload length: ' + payload);
  }
  var bytes = base64.toByteArray(payload);
  var size = 0x8000;
  var chunks = [];
  for (var i = 0, ii = bytes.length; i < ii; i += size) {
    chunks.push(
        String.fromCharCode.apply(String, bytes.subarray(i, i + size)));
  }
  var str = decodeURIComponent(escape(chunks.join('')));
  return JSON.parse(str);
}

module.exports = decode;
