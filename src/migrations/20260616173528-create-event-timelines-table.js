'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('event_timelines', {
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

            hour: {
                type: Sequelize.STRING(20),
                allowNull: false
            },

            title: {
                type: Sequelize.STRING(150),
                allowNull: false
            },

            description: {
                type: Sequelize.TEXT,
                allowNull: true
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
        await queryInterface.dropTable('event_timelines');
    }
};
