const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Vehicle model
class Vehicle extends Model {}

// create fields/columns for Vehicle model
Vehicle.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,          // will only allow numbers
        }
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fuel_eco: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     min: 20,                  // only allow values <= 20
        // }
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    max_passengers: {
        type: DataTypes.INTEGER,my        allowNull: false,
        validate: {
            max: 4,                  // only allow values <= 4
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,      // Model tableName will be the same as the model name
    underscored: true,
    modelName: 'vehicle'
});

module.exports = Vehicle;