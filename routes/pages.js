module.exports = (app) => {

    app.get('/', (req, res) => {
        if (req.user) {
            res.redirect('/dashboard');
            return;
        }
        res.send("Home page. Routes: (login by google) /auth/google, (change user) /change-user, (dashboard) /dashboard, (logout) /logout");
    });

    app.get('/dashboard', (req, res) => {
        if (!req.user) {
            res.send("You're not logged. Go to /auth/google")
            return;
        }
        res.send(`Your dashboard. In our DB you are: ${req.user.id}`)
    })
}
