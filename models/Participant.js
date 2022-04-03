const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Participant extends Model {}

Participant.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    organizer: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "No"
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
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
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'participant'
});

module.exports = Participant;