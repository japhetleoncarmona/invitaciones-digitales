const express = require('express');

const router = express.Router();

const {
    index,
    store
} = require('../controllers/timelineController');

router.get('/admin/events/:eventId/timeline', index);

router.post('/admin/events/:eventId/timeline', store);

module.exports = router;