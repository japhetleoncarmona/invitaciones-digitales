'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('events', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },

            title: {
                type: Sequelize.STRING(200),
                allowNull: false
            },

            slug: {
                type: Sequelize.STRING(200),
                allowNull: false,
                unique: true
            },

            event_type: {
                type: Sequelize.STRING(50),
                allowNull: false
            },

            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },

            event_date: {
                type: Sequelize.DATE,
                allowNull: false
            },

            address: {
                type: Sequelize.TEXT,
                allowNull: true
            },

            google_maps_url: {
                type: Sequelize.TEXT,
                allowNull: true
            },

            cover_image: {
                type: Sequelize.STRING(255),
                allowNull: true
            },

            is_active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },

            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },

            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('events');
    }
};
