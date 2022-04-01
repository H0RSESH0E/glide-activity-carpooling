const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fuel extends Model {}

Fuel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fuel_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isDecimal: true     // checks for any number
        }
    },
    vehicle: {
        trype: DataTypes.STRING,
        allowNull: false
    },
    vehicle_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'vehicle',
            key: 'id'
        }
    },
    activity_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'activity',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'fuel'
});

module.exports = Fuel;