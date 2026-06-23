const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const EventTimeline = sequelize.define('EventTimeline', {

    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },

    event_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

    hour: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT
    },

    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

}, {
    tableName: 'event_timelines',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


module.exports = EventTimeline;