const express = require('express');

const router = express.Router();

const upload =
    require('../config/multer');

const {
    index,
    store
} = require('../controllers/galleryController');

router.get(
    '/admin/events/:eventId/gallery',
    index
);

router.post(
    '/admin/events/:eventId/gallery',
    upload.single('image'),
    store
);

module.exports = router;