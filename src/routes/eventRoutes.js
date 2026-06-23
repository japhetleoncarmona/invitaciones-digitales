const express = require('express');

const router = express.Router();

const {
    showInvitation,
    index,
    create,
    store,
    edit,
    update,
    destroy
} = require('../controllers/eventController');

router.get('/evento/:slug', showInvitation);

router.get('/admin/events', index);
router.get('/admin/events/create', create);
router.post('/admin/events', store);
router.get(
    '/admin/events/edit/:id',
    edit
);

router.post(
    '/admin/events/update/:id',
    update
);

router.post(
    '/admin/events/delete/:id',
    destroy
);

module.exports = router;