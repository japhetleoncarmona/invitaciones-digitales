const Event = require('../models/Event');
const EventTimeline = require('../models/EventTimeline');

const index = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.eventId);

        if (!event) {
            return res.status(404).send('Evento no encontrado');
        }

        const timelines = await EventTimeline.findAll({
            where: {
                event_id: event.id
            },
            order: [
                ['order', 'ASC']
            ]
        });

        res.render('timeline/index', {
            event,
            timelines
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar cronograma');
    }
};

const store = async (req, res) => {
    try {
        const { eventId } = req.params;

        const {
            hour,
            title,
            description,
            order
        } = req.body;

        await EventTimeline.create({
            event_id: eventId,
            hour,
            title,
            description,
            order: order || 0
        });

        res.redirect(`/admin/events/${eventId}/timeline`);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar actividad');
    }
};

module.exports = {
    index,
    store
};