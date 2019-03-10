module.exports = (app) => {
    app.get('/', (req, res) => {
        if (req.user) {
            res.redirect('/most-recent-user');
            return;
        }
        res.send('Go to "/auth/google" to login. There will be redirect button soon.');
    });

    app.get('/most-recent-user', (req, res) => {
        if (!req.user) {
            res.redirect('/');
            return;
        }
        res.send({
            'You are still logged as ': req.user,
            'You can logout at: ': '"/logout"'
        })
    })
}
