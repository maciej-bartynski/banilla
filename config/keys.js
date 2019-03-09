const PRODUCTION_KEYS = require('./prod.js');
const DEVELOPMENT_KEYS = require('./dev.js');
module.exports = (process.env.NODE_ENV === 'production') ? PRODUCTION_KEYS : DEVELOPMENT_KEYS;