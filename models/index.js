// import all models
const Activity = require('./Activity');
const Fuel = require('./Fuel');
const User = require('./User');
const Vehicle = require('./Vehicle');
const Event = require('./Event');
const Comment = require('./Comment');
const Location = require('./Location');

// create associations

// Users have many Activities
User.hasMany(Activity, {
    foreignKey: 'user_id'
});

// Activities belong to User
Activity.belongsTo(User, {
    foreignKey: 'user_id'
});

// Vehicle belongs to a User
Vehicle.belongsTo(User, {
    foreignKey: 'vehicle_id'
});

// Vehicle belongs to Activity through User
Vehicle.belongsTo(Activity, {
    through: User,
    foreignKey: 'vehicle_id'
});

module.exports = { User, Activity, Comment, };