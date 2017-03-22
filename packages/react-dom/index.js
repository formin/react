'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-dom.node-prod.min.js');
} else {
  module.exports = require('./react-dom.node-dev.js');
}
