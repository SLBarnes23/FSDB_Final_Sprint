const express = require('express');
const router = express.Router();
const { setToken, authenticateJWT } = require('../services/auth');
const myEventEmitter = require('../services/logEvents.js');

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
    try {
        // Query both data sources
        const mongoResults = await mDal.getFullText(req.body.keyword);
        const postgresResults = await pDal.getFullText(req.body.keyword);

        // Send results to the view
        myEventEmitter.emit('event', 'app.post /search', 'INFO', 'search results were displayed.');
        res.render('search', { status: req.session.status, mongoResults, postgresResults });
    } catch (error) {
        console.error('Error during search:', error);
        res.status(500).send('An error occurred during the search.');
    }
});

module.exports = router;