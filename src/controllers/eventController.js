const Event = require('../models/Event');
const EventTimeline = require('../models/EventTimeline');
const EventGallery = require('../models/EventGallery');

const showInvitation = async (req, res) => {
    try {
        const { slug } = req.params;

        const event = await Event.findOne({
            where: { slug },
            include: [
                {
                    model: EventTimeline,
                    as: 'timelines'
                },
                {
                    model: EventGallery,
                    as: 'gallery'
                }
            ],
            order: [
                [
                    { model: EventTimeline, as: 'timelines' },
                    'order',
                    'ASC'
                ]
            ]
        });

        if (!event) {
            return res.status(404).send('Evento no encontrado');
        }

        res.render('templates/baby-shower-honey', {
            event,
            layout: false
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};

const index = async (req, res) => {
    try {
        const events = await Event.findAll({
            order: [['created_at', 'DESC']]
        });

        res.render('events/index', { events });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar eventos');
    }
};

const create = (req, res) => {
    res.render('events/create');
};

const store = async (req, res) => {
    try {
        const {
            title,
            slug,
            event_type,
            description,
            event_date,
            address,
            google_maps_url,
            music_url
        } = req.body;

        await Event.create({
            title,
            slug,
            event_type,
            description,
            event_date,
            address,
            google_maps_url,
            music_url,
            cover_image: null,
            is_active: true
        });

        res.redirect('/admin/events');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar evento');
    }
};

const edit = async (req, res) => {

    try {

        const event = await Event.findByPk(
            req.params.id
        );

        if (!event) {
            return res.status(404).send('Evento no encontrado');
        }

        res.render(
            'events/edit',
            {
                event
            }
        );

    } catch (error) {

        console.error(error);

        res.status(500).send('Error');

    }
};

const update = async (req, res) => {

    try {

        const event = await Event.findByPk(
            req.params.id
        );

        if (!event) {
            return res.status(404).send('Evento no encontrado');
        }

        await event.update(req.body);

        res.redirect('/admin/events');

    } catch (error) {

        console.error(error);

        res.status(500).send('Error');

    }
};

const destroy = async (req, res) => {

    try {

        const event = await Event.findByPk(
            req.params.id
        );

        if (!event) {
            return res.status(404).send('Evento no encontrado');
        }

        await event.destroy();

        res.redirect('/admin/events');

    } catch (error) {

        console.error(error);

        res.status(500).send('Error');

    }
};

module.exports = {
    showInvitation,
    index,
    create,
    store,
    edit,
    update,
    destroy
};