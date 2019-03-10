module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('go to /auth/google to login');
    });
}
