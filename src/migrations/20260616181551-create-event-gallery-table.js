'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('event_gallery', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },

            event_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'events',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            image_url: {
                type: Sequelize.STRING(255),
                allowNull: false
            },

            order: {
                type: Sequelize.INTEGER,
                defaultValue: 0
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
        await queryInterface.dropTable('event_gallery');
    }
};