const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Event model
class Event extends Model {}

// create fields/columns for Event model
Event.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [4, 1000]
        }
    },
    time_begin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    time_end: {
        type: DataTypes.DATE,
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
        validate: {
            min: 20,                  // only allow values <= 20
        }
    },
    creator_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'location',
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
    modelName: 'event'
});

module.exports = Event;