const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

    slug: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
    },

    event_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT
    },

    event_date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    address: {
        type: DataTypes.TEXT
    },

    google_maps_url: {
        type: DataTypes.TEXT
    },

    cover_image: {
        type: DataTypes.STRING(255)
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    music_url: {
    type: DataTypes.STRING(255)
    }
}, {
    tableName: 'events',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


module.exports = Event;