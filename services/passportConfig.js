const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = require('./../config/keys').GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = require('./../config/keys').GOOGLE_CLIENT_SECRET;
const CALLBACK_URL = require('./../config/keys').CALLBACK_URL;

let newGoogleStrategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken, refreshToken, profile, cb)
    }
);

passport.use(newGoogleStrategy);

module.exports = passport;
