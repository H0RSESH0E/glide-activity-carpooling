// import all models
const Activity = require('./Activity');
const User = require('./User');
const Vehicle = require('./Vehicle');
const Event = require('./Event');
const Comment = require('./Comment');
const Location = require('./Location');
const UserActJunc = require('./UserActJunc');
const UserEveJunc = require('./UserEveJunc');

// USER
// Users have many Activities
User.hasMany(Activity, {
    foreignKey: 'user_id'
});

User.hasMany(Vehicle, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

// User.belongsToMany(Event, {
//     through: UserEveJunc,
//     foreignKey: 'user_id'
// });

// VEHICLE
// Vehicle belongs to a User
Vehicle.belongsTo(User, {
    foreignKey: 'vehicle_id'
});

// LOCATION
Location.belongsTo(Event, {
    foreignKey: 'location_id'
});

// EVENT
// Event.belongsToMany(User, {
//     through: UserEveJunc,
//     as: 'chosen_activities',
//     foreignKey: 'event_id'
// });

// Event.hasOne(Location, {
//     as: 'Testing',
//     foreignKey: 'event_id'
// });

// Event.hasMany(Comment, {
//     foreignKey: "event_id",
//     onDelete: "cascade"
// });

// Event.belongsToMany(User, {
//     through: UserEveJunc,
//     foreignKey: "event_id",
//     onDelete: "cascade"
// });

// Event.belongsTo(Activity, {
//     foreignKey: 'activity_id'
// });

// COMMENT
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

module.exports = { User, Activity, Comment, Vehicle, Location, Event, UserEveJunc, UserActJunc };