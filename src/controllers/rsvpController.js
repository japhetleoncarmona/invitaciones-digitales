const Rsvp = require('../models/Rsvp');

const storeRsvp = async (req, res) => {
    try {
        const {
            event_id,
            reservation_name,
            email,
            phone,
            status,
            attendees_count,
            comments
        } = req.body;

        if (!event_id || !reservation_name || !status) {
            return res.status(400).json({
                message: 'event_id, reservation_name y status son obligatorios'
            });
        }

        const rsvp = await Rsvp.create({
            event_id,
            reservation_name,
            email,
            phone,
            status,
            attendees_count: attendees_count || 1,
            comments
        });

        return res.status(201).json({
            success: true,
            message: 'Gracias por confirmar tu asistencia'
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Error al registrar confirmación',
            error: error.message
        });
    }
};

module.exports = {
    storeRsvp
};