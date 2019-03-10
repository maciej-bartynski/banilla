const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/current-user');
    });

    app.get('/logout', (req, res) => {
        req.logout();
        let responseData = req.user ? req.user : "U R logged out"
        res.send(responseData)
    })

    app.get('/current-user', (req, res) => {
        let responseData = req.user ? req.user : "no current user"
        res.send({ 'You are logged as': responseData })
    })

}