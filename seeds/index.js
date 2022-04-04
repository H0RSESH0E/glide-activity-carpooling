const seedUser = require('./user-seeds');
const seedEvent = require('./event-seeds');
const seedComment = require('./comment-seeds');
const seedActivity = require('./activity-seeds');
const seedLocation = require('./location-seeds');
const seedVehicle = require('./vehicle-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUser();
    console.log('--------------');

    await seedEvent();
    console.log('--------------');

    await seedComment();
    console.log('--------------');

    await seedActivity();
    console.log('--------------');

    await seedLocation();
    console.log('--------------');

    await seedVehicle();
    console.log('--------------');

    process.exit(0);
};

seedAll();