const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Location extends Model {}

// create fields/columns for Location model
Location.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    street_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lattitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // location_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'user',
    //         key: 'id'
    //     }
    // },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location'
});

module.exports = Location;