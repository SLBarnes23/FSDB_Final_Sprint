const express = require('express');
const router = express.Router();
const { setToken, authenticateJWT } = require('../services/auth');
const myEventEmitter = require('../services/logEvents.js');
const db = require("../services/p.db");
const pDal = require('../services/p.fulltext.dal');
const mDal = require('../services/m.fulltext.dal');

// Use the setToken middleware to set the JWT token from the session
router.use(setToken);

// Protect all API routes with the authenticateJWT middleware
router.use(authenticateJWT);

router.get('/', async (req, res) => {
    const theResults = [];
    myEventEmitter.emit('event', 'app.get /search', 'INFO', 'search page (search.ejs) was displayed.');
    res.render('search', { status: req.session.status, mongoResults: [], postgresResults: [] });
});

router.post('/', async (req, res) => {
    const { keyword, dataSource } = req.body;
    const userId = req.session.user ? req.session.user.id : null;

    console.log(`Extracted userId: ${userId}`);

    if (!userId) {
        return res.status(400).send('User ID is missing.');
    }

    let mongoResults = [];
    let postgresResults = [];

    try {
        // Log the search keyword along with userId and dataSource
        myEventEmitter.emit('event', 'app.post /search', 'INFO', `Search keyword: ${keyword}, User ID: ${userId}, Data Source: ${dataSource}`);

        // Insert the keyword into the database
        await db.query(
            'INSERT INTO public.keywords (login_id, keywords) VALUES ($1, $2)',
            [userId, keyword]
        );

        // Get results based on the dataSource selected
        if (dataSource === 'both' || dataSource === 'mongodb') {
            mongoResults = await mDal.getFullText(keyword);
        }
        if (dataSource === 'both' || dataSource === 'postgresql') {
            postgresResults = await pDal.getFullText(keyword);
        }

        // Log that search results were displayed
        myEventEmitter.emit('event', 'app.post /search', 'INFO', 'Search results were displayed.');

        res.render('search', { status: req.session.status, mongoResults, postgresResults });
    } catch (error) {
        console.error('Error during search:', error);
        res.status(500).send('An error occurred during the search.');
    }
});

module.exports = router;
