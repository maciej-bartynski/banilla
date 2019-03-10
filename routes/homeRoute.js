module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Go to "/auth/google" to login. There will be redirect button soon.');
    });
}
