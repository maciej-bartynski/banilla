const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = require('./../config/keys').GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = require('./../config/keys').GOOGLE_CLIENT_SECRET;
const CALLBACK_URL = require('./../config/keys').CALLBACK_URL;

const GoogleUser = require('mongoose').model('google_user');

const signInOrSignUpUser = (accessToken, refreshToken, profile, done) => {

    let user = {
        googleUserID: profile.id
    }

    let isUser = async () => {
        let userData = await GoogleUser.findOne(user);
        if (userData) {
            console.log('userdata', userData)
            done(null, userData);
            return;
        }
        console.log('new userdata')
        let newUser = async () => await new GoogleUser(user).save();
        newUser();
        done(null, newUser)
    };

    isUser();
}

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    let userToDeserialize = async () => await GoogleUser.findById(userId)
    done(null, userToDeserialize)
})

let newGoogleStrategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
},
    signInOrSignUpUser
);

passport.use(newGoogleStrategy);

module.exports = passport;
