const express = require('express');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();
const myEventEmitter = require('../services/logEvents.js');
const { addLogin, getLoginByUsername } = require('../services/p.auth.dal');

// Initialize passport
router.use(passport.initialize());
router.use(passport.session());

// Passport session setup (serialize/deserialize user)
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Configure Facebook strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('Facebook profile:', profile);
        let user = await getLoginByUsername(profile.id); // Check for existing user with Facebook ID
        if (!user) {
            const email = (profile.emails && profile.emails.length > 0) ? profile.emails[0].value : null;
            user = await addLogin(profile.displayName, email, null, uuid.v4(), profile.id); // Store Facebook ID in social_id
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

// Configure Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, async (token, tokenSecret, profile, done) => {
    try {
        let user = await getLoginByUsername(profile.id); // Check for existing user with Google ID
        if (!user) {
            user = await addLogin(profile.displayName, profile.emails[0].value, null, uuid.v4(), profile.id); // Store Google ID in social_id
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

// Facebook authentication routes
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect: '/auth' }),
    (req, res) => {
        req.session.user = { id: req.user._id, username: req.user.username };
        req.session.token = jwt.sign({ username: req.user.username, id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '10m' });
        req.session.status = `Welcome, ${req.user.username}!`;
        const redirectTo = req.session.redirectTo || '/';
        delete req.session.redirectTo;
        res.redirect(redirectTo);
    }
);

// Google authentication routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth' }),
    (req, res) => {
        req.session.user = { id: req.user._id, username: req.user.username };
        req.session.token = jwt.sign({ username: req.user.username, id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '10m' });
        req.session.status = `Welcome, ${req.user.username}!`;
        const redirectTo = req.session.redirectTo || '/';
        delete req.session.redirectTo;
        res.redirect(redirectTo);
    }
);

// Existing routes for login, registration, etc.
router.get('/', async (req, res) => {
    res.render('login', { status: req.session.status });
});

router.post('/', async (req, res) => {
    try {
        let user = await getLoginByUsername(req.body.username);
        if (!user) {
            req.session.status = 'Incorrect username.';
            res.redirect('/auth');
            return;
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { expiresIn: '10m' });
            req.session.user = { id: user._id, username: user.username };
            req.session.token = token;
            req.session.status = 'Thank you for logging in, ' + user.username;
            res.redirect(req.session.redirectTo || '/');
            delete req.session.redirectTo;
            return;
        } else {
            req.session.status = 'Incorrect password.';
            res.redirect('/auth');
            return;
        }
    } catch (error) {
        console.log(error);
        res.render('503');
        return;
    }
});

router.get('/new', async (req, res) => {
    res.render('register', { status: req.session.status });
});

router.post('/new', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if (req.body.email && req.body.username && req.body.password) {
            const result = await addLogin(req.body.username, req.body.email, hashedPassword, uuid.v4());
            if (result.code === "23505" || result.code === 11000) {
                let constraint;
                function setConstraint(indexName) {
                    const constraintsMap = {
                        "unique_username": "Username",
                        "unique_email": "Email address"
                    };
                    return constraintsMap[indexName] || indexName;
                }

                if (result.code === "23505") {
                    constraint = setConstraint(result.constraint);
                } else if (result.code === 11000) {
                    const match = result.errmsg.match(/index: (\w+)/);
                    const indexName = match ? match[1] : 'unknown';
                    constraint = setConstraint(indexName);
                }
                req.session.status = `${constraint} already exists, please try another.`;
                res.redirect('/auth/new');
                return;
            } else {
                req.session.status = 'New account created, please login.';
                res.redirect('/auth');
                return;
            }
        } else {
            req.session.status = 'Not enough form fields completed.';
            res.redirect('/auth/new');
            return;
        }       
    } catch (error) {
        console.log(error);
        res.render('503');
        return;
    }
});

router.get('/exit', async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Session destruction error:", err);
            return res.status(500).send("Could not log out.");
        } else {
            res.redirect('/');
            return;
        }
    });
});

module.exports = router;