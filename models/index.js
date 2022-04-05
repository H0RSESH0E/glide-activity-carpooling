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

User.hasMany(Event, {
    through: UserEveJunc,
    foreignKey: 'user_id'
});

// VEHICLE
Vehicle.belongsTo(User, {
    foreignKey: 'user_id'
});

// Vehicle.belongsToMany(Event, {
//     foreignKey: 'event_id'
// });

// LOCATIOH
Location.belongsTo(Event, {
    foreignKey: 'event_id'
});

// ACTIVITY
Activity.hasMany(Event, {
    foreignKey: 'event_id'
});

Activity.hasMany(User, {
    foreignKey: 'user_id'
});

// EVENT
Event.hasOne(Location, {
    foreignKey: 'location_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

Event.hasMany(User, {
    through: 'UserEveJunc',
    foreignKey: 'event_id'
})

Event.belongsTo(Activity, {
    foreignKey: 'activity_id'
});

Event.hasMany(Comment, {
    foreignKey: 'comment_id'
});

Event.hasOne(Vehicle, {
    foreignKey: 'vehicle_id'
});

// COMMENT
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Comment.belongsTo(Event, {
    foreignKey: 'event_id'
});

module.exports = { User, Activity, Comment, Vehicle, Location, Event, UserEveJunc, UserActJunc };