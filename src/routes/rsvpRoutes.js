const express = require('express');

const router = express.Router();

const {
    storeRsvp
} = require('../controllers/rsvpController');

router.post('/rsvp', storeRsvp);

module.exports = router;