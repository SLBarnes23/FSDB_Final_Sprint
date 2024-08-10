if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const session = require('express-session');
const pool = require('./services/p.db'); // Make sure this file exists
const app = express();
const PORT = process.env.PORT || 3000;
global.DEBUG = true;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

const myEventEmitter = require('./services/logEvents.js');

app.listen(PORT, (err) => {
    if (err) console.log(err);
    myEventEmitter.emit('event', 'app.listen', 'SUCCESS', 'http search site successfully started.');
    console.log(`Simple app running on port ${PORT}.`)
});

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to serve static files from the 'images' directory
app.use(express.static('images'));

// Test route for PostgreSQL connection
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Database connected: ${result.rows[0].now}`);
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).send('Database connection error');
    }
});


// Routes
app.get('/', async (req, res) => {
    myEventEmitter.emit('event', 'app.get', 'INFO', 'landing page (index.ejs) was displayed.');
    res.render('index', { status: req.session.status });
});

app.get('/about', async (req, res) => {
    myEventEmitter.emit('event', 'app.get /about', 'INFO', 'about page (about.ejs) was displayed.');
    res.render('about', { status: req.session.status });
});

const searchRouter = require('./routes/search');
app.use('/search', searchRouter);

const authRouter = require('./routes/auth');
app.use("/auth", authRouter);

// anything beginning with "/api" will go into this
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('404', { status: req.session.status });
});