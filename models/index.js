// import all models
const Activity = require('./Activity');
const User = require('./User');
const Vehicle = require('./Vehicle');
const Event = require('./Event');
const Comment = require('./Comment');
const Location = require('./Location');
const UserActJunc = require('./UserActJunc');
const UserEveJunc = require('./UserEveJuncRenamed');

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
    // onDelete: "SET NULL"
});

User.hasMany(Event, {
    foreignKey: 'user_id',
});

User.belongsToMany(Event, {
    as: 'participant',
    foreignKey: 'user_id',
    through: UserEveJunc
})

// VEHICLE
Vehicle.belongsTo(User, {
    foreignKey: 'user_id',
});

// Vehicle.belongsToMany(Event, {
//     foreignKey: 'event_id'
// });

// ACTIVITY
Activity.hasMany(Event, {
    foreignKey: 'event_id',
});

// Activity.belongsTo(Event, {
//     foreignKey: 'event_id'
// });

// EVENT
Event.belongsTo(User, {
    foreignKey: 'user_id',
});

Event.belongsTo(Activity, {
    foreignKey: 'activity_id',
});

Event.hasMany(Comment, {
    foreignKey: 'event_id',
});

Event.belongsTo(Location, {
    foreignKey: 'location_id',
});

// COMMENT
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Event, {
    foreignKey: 'event_id',
});

module.exports = {
    User,
    Activity,
    Comment,
    Vehicle,
    Location,
    Event,
    UserEveJunc,
    UserActJunc,
};