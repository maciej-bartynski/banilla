const authGoogle = require('./authGoogle');
const authLocal = require('./authLocal');
const pages = require('./pages');

module.exports = (app) => {
    authGoogle(app);
    authLocal(app);
    pages(app);
}