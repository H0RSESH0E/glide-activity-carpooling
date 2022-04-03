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
        type: DataTypes.TEXT,
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
        type: DataTypes.DATE,
        allowNull: false,
    },
    time_end: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    event_reviews: {
        type: DataTypes.TEXT,
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
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    comment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'comment',
            key: 'id'
        }
    },
    driver_id: {
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