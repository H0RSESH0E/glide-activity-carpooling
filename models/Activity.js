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
    activity_name: {
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
        type: DataTypes.STRING,
        allowNull: false,
    },
    fee: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,          // will only allow numbers
        }
    },
    equipment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    season: {
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

module.exports = Activity;