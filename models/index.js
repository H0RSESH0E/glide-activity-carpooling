// import all models
const Activity = require('./Activity');
const Fuel = require('./Fuel');
const User = require('./User');
const Vehicle = require('./Vehicle');
const Vehicl = require('./Vehicle');

// create associations

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