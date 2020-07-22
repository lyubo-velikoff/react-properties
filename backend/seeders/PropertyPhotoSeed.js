'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('photo', [
            {
                url: 'https://vestnorden.com/wp-content/uploads/2018/03/house-placeholder.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: 'https://vestnorden.com/wp-content/uploads/2018/03/house-placeholder.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: 'https://vestnorden.com/wp-content/uploads/2018/03/house-placeholder.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: 'https://vestnorden.com/wp-content/uploads/2018/03/house-placeholder.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url: 'https://vestnorden.com/wp-content/uploads/2018/03/house-placeholder.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {})

        await queryInterface.bulkInsert('property', [
            {
                title: '1- стаен, Център, 330лв',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Парцел в кв. Долапите, 7,000€',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Парцел в кв. Долапите, 7,000€',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Търговски обект, Склад в с. Ряхово, 80,000€',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Промишлено помещение, ИПЗ, Дунав мост, 1,500,000€',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {})

        await queryInterface.bulkInsert('propertyPhoto', [
            {
                propertyId: 1,
                photoId: 1
            },
            {
                propertyId: 1,
                photoId: 2
            },
            {
                propertyId: 1,
                photoId: 3
            },
            {
                propertyId: 2,
                photoId: 4
            },
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('photo', null, {})
        await queryInterface.bulkDelete('property', null, {})
        await queryInterface.bulkDelete('propertyPhoto', null, {})
    }
}
