var router = require('express').Router();
const {setToken, authenticateJWT } = require('../../services/auth');

if(DEBUG) {
    console.log('API Routes');
    console.log('ROUTE: /api/auth/:id');
    console.log('ROUTE: /api/full/p/:text');
    console.log('ROUTE: /api/full/m/:text');
}

// Use the setToken middleware to set the JWT token from the session
router.use(setToken);

// Protect all API routes with the authenticateJWT middleware
router.use(authenticateJWT);

// http://localhost:3000/api/auth/
const authRouter = require('./auth')
router.use('/auth', authRouter);

// http://localhost:3000/api/full/
const fulltextRouter = require('./fulltext')
router.use('/full', fulltextRouter);

module.exports = router;