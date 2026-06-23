'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('rsvps', {
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

            reservation_name: {
                type: Sequelize.STRING(200),
                allowNull: false
            },

            email: {
                type: Sequelize.STRING(150),
                allowNull: true
            },

            phone: {
                type: Sequelize.STRING(50),
                allowNull: true
            },

            status: {
                type: Sequelize.ENUM(
                    'pending',
                    'confirmed',
                    'declined'
                ),
                defaultValue: 'pending'
            },

            attendees_count: {
                type: Sequelize.INTEGER,
                defaultValue: 1
            },

            comments: {
                type: Sequelize.TEXT,
                allowNull: true
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
        await queryInterface.dropTable('rsvps');
    }
};