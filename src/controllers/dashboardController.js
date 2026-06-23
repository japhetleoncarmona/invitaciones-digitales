const Rsvp = require('../models/Rsvp');

const dashboard = async (req, res) => {

    try {

        const confirmed = await Rsvp.count({
            where: {
                status: 'confirmed'
            }
        });

        const declined = await Rsvp.count({
            where: {
                status: 'declined'
            }
        });

        const attendees = await Rsvp.sum(
            'attendees_count',
            {
                where: {
                    status: 'confirmed'
                }
            }
        );

        const latestRsvps = await Rsvp.findAll({
            order: [
                ['created_at', 'DESC']
            ],
            limit: 10
        });

        res.render(
            'dashboard/index',
            {
                confirmed,
                declined,
                attendees: attendees || 0,
                latestRsvps
            }
        );

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Error al cargar dashboard'
        );
    }
};

module.exports = {
    dashboard
};