const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rsvp = sequelize.define('Rsvp', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },

    event_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

    reservation_name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(150)
    },

    phone: {
        type: DataTypes.STRING(50)
    },

    status: {
        type: DataTypes.ENUM(
            'pending',
            'confirmed',
            'declined'
        ),
        defaultValue: 'pending'
    },

    attendees_count: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },

    comments: {
        type: DataTypes.TEXT
    }

}, {
    tableName: 'rsvps',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Rsvp;