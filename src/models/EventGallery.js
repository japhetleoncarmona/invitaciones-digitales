const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EventGallery = sequelize.define('EventGallery', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },

    event_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

    image_url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

}, {
    tableName: 'event_gallery',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = EventGallery;