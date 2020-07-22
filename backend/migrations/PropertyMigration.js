'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('property', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            area: {
                type: Sequelize.INTEGER
            },
            yard: {
                type: Sequelize.INTEGER
            },
            regulation: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            phone: {
                type: Sequelize.STRING,
                defaultValue: '0895 606 165'
            },
            currencyId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: {
                        tableName: 'currency',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
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
    down: async (queryInterface) => {
        await queryInterface.dropTable('property')
    }
}
