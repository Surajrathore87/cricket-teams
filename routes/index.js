const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Welcome Page Route
router.get('/', (req, res) => {
    res.render('welcome', { message: 'Welcome to Node.js with MongoDB!' });
});

module.exports = router;
