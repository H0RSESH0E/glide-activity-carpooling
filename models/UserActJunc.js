const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserActJunc extends Model { }

UserActJunc.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    activity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'activity',
            key: 'id'
        }
    }
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'userActJunc'
    });

module.exports = UserActJunc;