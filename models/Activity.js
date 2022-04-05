const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Activity model
class Activity extends Model {}

// create fields/columns for Activity model
Activity.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 1000]
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    style: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    license_required: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    risk_level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fee: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    max_participants: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 20,                  // only allow values <= 20
        }
    },
    min_participants: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: {
            min: 1,                  // only allow values => 1
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity'
});

module.exports = Activity;