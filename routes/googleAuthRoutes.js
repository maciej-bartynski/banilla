const passport = require('passport');

const googleAuthOptions = {
    scope: ['profile', 'email'],
    prompt: ['select_account']
}

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google',  googleAuthOptions));

    app.get('/change-user', (req, res)=>{
        if (req.user) {
            req.logout();
            res.redirect('/auth/google');
            return;
        }
        res.redirect('/auth/google');
    })

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/current-user');
    });

    app.get('/logout', (req, res) => {
        req.logout();
        let responseData = req.user ? req.user : "You've been logged out"
        res.send(responseData)
    })

    app.get('/current-user', (req, res) => {
        let responseData = req.user ? req.user : "no current user"
        res.send({ 'You are logged as': responseData })
    })

}