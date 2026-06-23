const Event = require('../models/Event');
const EventGallery = require('../models/EventGallery');

const index = async (req, res) => {

    try {

        const event = await Event.findByPk(
            req.params.eventId
        );

        if (!event) {
            return res.status(404).send(
                'Evento no encontrado'
            );
        }

        const images =
            await EventGallery.findAll({
                where: {
                    event_id: event.id
                },
                order: [
                    ['order', 'ASC']
                ]
            });

        res.render(
            'gallery/index',
            {
                event,
                images
            }
        );

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Error'
        );

    }
};
const store = async (req, res) => {

    try {

        const { eventId } = req.params;

        await EventGallery.create({

            event_id: eventId,

            image_url:
                'uploads/gallery/' +
                req.file.filename,

            order: 0

        });

        res.redirect(
            `/admin/events/${eventId}/gallery`
        );

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Error al subir imagen'
        )

    }
};

module.exports = {
    index,
    store
};