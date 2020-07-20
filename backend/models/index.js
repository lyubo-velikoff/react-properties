'use strict'

const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const CategoryModel = require('./category.js')
const ConstructionTypeModel = require('./construction-type.js')
const CurrencyModel = require('./currency.js')
const DetailModel = require('./detail.js')
const DetailsPlotModel = require('./details-plot.js')
const FloorModel = require('./floor.js')
const FloorCountModel = require('./floor-count.js')
const FurnishedModel = require('./furnished.js')
const CountyModel = require('./county.js')
const PhotoModel = require('./photo.js')
const PropertyModel = require('./property.js')
const RegionModel = require('./region.js')

let sequelize
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const Category = CategoryModel(sequelize, Sequelize)
const ConstructionType = ConstructionTypeModel(sequelize, Sequelize)
const Currency = CurrencyModel(sequelize, Sequelize)
const Detail = DetailModel(sequelize, Sequelize)
const DetailsPlot = DetailsPlotModel(sequelize, Sequelize)
const Floor = FloorModel(sequelize, Sequelize)
const FloorCount = FloorCountModel(sequelize, Sequelize)
const Furnished = FurnishedModel(sequelize, Sequelize)
const County = CountyModel(sequelize, Sequelize)
const Photo = PhotoModel(sequelize, Sequelize)
const Property = PropertyModel(sequelize, Sequelize)
const Region = RegionModel(sequelize, Sequelize)

Property.hasOne(Currency, {
    foreignKey: 'currencyId'
})

Property.hasOne(County, {
    foreignKey: 'countyId'
})

Property.hasOne(Region, {
    foreignKey: 'regionId'
})

Property.hasOne(Floor, {
    foreignKey: 'floorId'
})

Property.hasOne(FloorCount, {
    foreignKey: 'floorCountId'
})

Property.hasOne(ConstructionType, {
    foreignKey: 'constructionTypeId'
})

Property.hasOne(Furnished, {
    foreignKey: 'furnishedId'
})

Property.hasMany(Photo, {
    foreignKey: 'propertyId'
})

Photo.belongsTo(Property)

module.exports = {
    sequelize,
    Sequelize,
    Category,
    ConstructionType,
    Currency,
    Detail,
    DetailsPlot,
    Floor,
    FloorCount,
    Furnished,
    County,
    Photo,
    Property,
    Region
}