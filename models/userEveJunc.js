const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserEveJunc extends Model {}

UserEveJunc.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'event',
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


module.exports = UserEveJunc;