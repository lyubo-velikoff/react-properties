'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('photo', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false
            },
            propertyId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'property',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('photo')
    }
}
