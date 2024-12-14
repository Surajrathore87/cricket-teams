const express = require('express');
const router = express.Router();
const multer = require('multer');
const PlayerController = require('../controllers/PlayerController');

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Render form page
router.get('/form', (req, res) => {
    res.render('form');
});

// API to handle form submission
router.post('/submit', upload.fields([
    { name: 'profileImg', maxCount: 1 },
    { name: 'aadhaarCardImg', maxCount: 1 },
    { name: 'certificateImg', maxCount: 1 }
]), PlayerController.savePlayer);

module.exports = router;