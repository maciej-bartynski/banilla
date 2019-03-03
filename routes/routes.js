const googleAuthRoute = require('./googleAuthRoutes');
const homeRoute = require('./homeRoute');

module.exports = (app) => {
    googleAuthRoute(app);
    homeRoute(app);
}