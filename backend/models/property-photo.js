'use strict'

module.exports = (sequelize, DataTypes) => {
    const PropertyPhoto = sequelize.define('propertyPhoto', {
        propertyId: {
            type: DataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: {
                    tableName: 'property',
                    schema: 'avalon'
                },
                key: 'id'
            },
            allowNull: false
        },
        photoId: {
            type: DataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: {
                    tableName: 'photo',
                    schema: 'avalon'
                },
                key: 'id'
            },
            allowNull: false
        },
    }, { tableName: 'propertyPhoto', timestamps: false })

    PropertyPhoto.associate = models => {
        const { PropertyPhoto, Property, Photo } = models
        PropertyPhoto.belongsTo(Property)
        PropertyPhoto.belongsTo(Photo)
    }

    return PropertyPhoto
}
