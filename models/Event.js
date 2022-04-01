const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Activity model
class Event extends Model {}

// create fields/columns for Activity model
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
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 1000]
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time_begin: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     max: 20,                  // only allow values <= 20
        // }
    },
    time_end: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     min: 20,                  // only allow values <= 20
        // }
    },
    event_reviews: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    max_participants: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 20,                  // only allow values <= 20
        }
    },
    min_participants: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 20,                  // only allow values <= 20
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity'
});

module.exports = Event;