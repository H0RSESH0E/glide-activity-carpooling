// import all models
const Activity = require('./Activity');
const Fuel = require('./Fuel');
const User = require('./User');
const Vehicle = require('./Vehicle');
const UserActJunc = require('./UserActJunc');
const Participant = require('./Participant');
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

User.belongsTo(Location, {
    foreignKey: 'location_id'
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
    foreignKey: 'event_id'
});

// EVENT
Event.belongsToMany(User, {
    through: UserActJunc,
    as: 'chosen_activities',
    foreignKey: 'event_id'
});

Event.hasOne(Location, {
    foreignKey: 'event_id'
});

Event.hasMany(Comment, {
    foreignKey: "event_id",
    onDelete: "cascade"
});

Event.hasMany(User, {
    through: UserEveJunc,
    foreignKey: "event_id",
    onDelete: "cascade"
});

Event.belongsTo(Activity, {
    foreignKey: 'activity_id'
})

// // ACTIVITY
// Activity.belongsToMany(User, {
//     through: UserActJunc,
//     as: 'chosen_activities',
//     foreignKey: 'activity_id'
// });

// COMMENT

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

Comment.belongsTo(Event, {
    foreignKey
})














// Users have many Activities
User.hasMany(Activity, {
    foreignKey: 'user_id'
});

// Activities belong to User
Activity.belongsTo(User, {
    foreignKey: 'user_id'
});

// Fuel belongs to 
Fuel.belongsTo(Activity, {
    foreignKey: 'user_id'
});

Fuel.hasMany(Activity, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Vehicle.hasMany(Activity, {
    foreignKey: 'activity_id',
    onDelete: 'SET NULL'
})

Vehicle.belongsToMany(Activity, {
    foreignKey: 'activity_id'
});

// Post.hasMany(Comment, {
//     foreignKey: 'post_id'
// });


module.exports = { User, Activity, Fuel, Comment };