const express = require('express');
const passport = require('passport')
const routes = require('./routes/index')
const mongoose = require('mongoose');
const MONGODB_SHORT_SRV_CONNECTION_STRING = require('./config/keys').MONGODB_SHORT_SRV_CONNECTION_STRING;
const COOKIE_KEY = require('./config/keys').COOKIE_KEY;
require('./db/users');
require('./services/strategyGoogle');
const cookieSession = require('cookie-session')

mongoose.connect(MONGODB_SHORT_SRV_CONNECTION_STRING,  { useNewUrlParser: true });

const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [COOKIE_KEY]
    })
)
app.use(passport.initialize());
app.use(passport.session());
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);