// import all models
const Activity = require('./Activity');
const User = require('./User');
const Vehicle = require('./Vehicle');
const Event = require('./Event');
const Comment = require('./Comment');
const Location = require('./Location');
const UserActJunc = require('./UserActJunc');
const UserEveJunc = require('./UserEveJunc');



// create associations

// VEHICLE
Vehicle.belongsTo(User, {
    foreignKey: 'user_id'
});

// USER
User.hasMany(Vehicle, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

User.belongsToMany(Event, {
    through: UserEveJunc,
    foreignKey: 'user_id'
});

User.belongsToMany(Activity, {
    through: UserActJunc,
    foreignKey: 'user_id'
});

// LOCATION

Location.belongsTo(Event, {
    foreignKey: 'location_id'
});

// EVENT
Event.belongsToMany(User, {
    through: UserEveJunc,
    as: 'chosen_activities',
    foreignKey: 'event_id'
});

Event.hasOne(Location, {
    as: 'Testing',
    foreignKey: 'event_id'
});

Event.hasMany(Comment, {
    foreignKey: "event_id",
    onDelete: "cascade"
});

Event.belongsToMany(User, {
    through: UserEveJunc,
    foreignKey: "event_id",
    onDelete: "cascade"
});

Event.belongsTo(Activity, {
    foreignKey: 'activity_id'
});

// COMMENT

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

module.exports = { User, Activity, Comment, };