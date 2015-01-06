'use strict';

var path = require('path');

module.exports = function() {
  var paths = Array.prototype.slice.call(arguments);
  var first = paths.shift();
  // Find the first root of this result
  var result = trampoline(require.resolve(first), function getFirstRoot(p) {
    if (path.basename(p) === first) { return p; }
    return getFirstRoot.bind(this, path.join(p, '..'));
  });

  while (paths.length > 0) {
    result = path.join(result, 'node_modules', paths.shift());
  }

  return require(result);
};

// Helps prevent stack-overflows
function trampoline(start, thunk) {
  var r = thunk(start);
  while (r instanceof Function) { r = r(); }
  return r;
}
