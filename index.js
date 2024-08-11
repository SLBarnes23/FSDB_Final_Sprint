if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Import required modules
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
global.DEBUG = true;

// Initialize event emitter
const myEventEmitter = require('./services/logEvents.js');

// Set up view engine and static files
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Authentication middleware
app.use((req, res, next) => {
    const publicRoutes = ['/', '/about', '/auth', '/auth/google', '/api'];
    const isPublicRoute = publicRoutes.some(route => req.originalUrl.startsWith(route));

    if (req.isAuthenticated() || isPublicRoute) {
        return next();
    } else {
        req.session.redirectTo = req.originalUrl;
        res.redirect('/auth/google');
    }
});

// Route with single event emission
app.get('/', (req, res) => {
    myEventEmitter.emit('event', 'app.get', 'INFO', 'Landing page (index.ejs) was displayed.');
    res.render('index', { status: req.session.status });
});

app.get('/about', (req, res) => {
    myEventEmitter.emit('event', 'app.get /about', 'INFO', 'About page (about.ejs) was displayed.');
    res.render('about', { status: req.session.status });
});

// Routes with single event emission middleware
app.use('/search', (req, res, next) => {
     myEventEmitter.emit('event', 'search route', 'INFO', `Search route accessed: ${req.originalUrl}`);
    next();
}, require('./routes/search'));

app.use('/auth', (req, res, next) => {
     myEventEmitter.emit('event', 'auth route', 'INFO', `Auth route accessed: ${req.originalUrl}`);
    next();
}, require('./routes/auth'));

app.use('/api', (req, res, next) => {
    myEventEmitter.emit('event', 'api route', 'INFO', `API route accessed: ${req.originalUrl}`);
    next();
}, require('./routes/api'));

// Handle 404 errors
app.use((req, res) => {
    myEventEmitter.emit('event', '404 error', 'WARNING', `404 error for URL: ${req.originalUrl}`);
    res.status(404).render('404', { status: req.session.status });
});

// Start server
app.listen(PORT, (err) => {
    if (err) {
        myEventEmitter.emit('event', 'app.listen error', 'ERROR', `Error starting the app: ${err.message}`);
        console.log(err);
    } else {
        myEventEmitter.emit('event', 'app.listen', 'SUCCESS', 'HTTP search site successfully started.');
        console.log(`Simple app running on port ${PORT}.`);
    }
});