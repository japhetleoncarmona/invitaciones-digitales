const express = require('express');
require('dotenv').config();

const sequelize = require('./src/config/database');
require('./src/models/associations');
const Event = require('./src/models/Event');
const eventRoutes = require('./src/routes/eventRoutes');
const rsvpRoutes = require('./src/routes/rsvpRoutes');
const dashboardRoutes =require('./src/routes/dashboardRoutes');
const expressLayouts = require('express-ejs-layouts');
const timelineRoutes = require('./src/routes/timelineRoutes');
const galleryRoutes = require('./src/routes/galleryRoutes');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(expressLayouts);
app.set('layout', 'layouts/admin');
app.use(eventRoutes);
app.use(rsvpRoutes);
app.use(dashboardRoutes);
app.use(timelineRoutes);
app.use(galleryRoutes);
const PORT = process.env.PORT || 3000; // Middleware para parsear JSON en las solicitudes

app.use(
    '/uploads',
    express.static(
        path.join(__dirname, 'public/uploads')
    )
);
app.use(
    express.static(
        path.join(__dirname, 'public')
    )
);

app.get('/', (req, res) => {
    res.send('🚀 Invitaciones Digitales funcionando');
});

app.get('/test-event', async (req, res) => {
    try {
        const event = await Event.create({
            title: 'XV Años de María',
            slug: 'xv-maria',
            event_type: 'xv',
            description: 'Celebración especial de XV años',
            event_date: new Date('2026-12-15 19:00:00'),
            address: 'Salón Jardín Real, Ciudad de México',
            google_maps_url: 'https://maps.google.com',
            cover_image: null,
            is_active: true
        });

        res.json({
            message: 'Evento creado correctamente',
            event
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear evento',
            error: error.message
        });
    }
});

const startServer = async () => {
    try {
        await sequelize.authenticate(); // Verifica la conexión a la base de datos
        console.log('Conexión a la base de datos establecida exitosamente.');
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar a la base de datos MySQL:', error);
        process.exit(1); // Termina el proceso con un código de error
    }
};

startServer();