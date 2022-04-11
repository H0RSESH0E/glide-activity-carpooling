const userdata = require('./user-seeds');
const vehicledata = require('./vehicle-seeds');
const locationdata = require('./location-seeds');
const seedActivity = require('./activity-seeds');
const eventdata = require('./event-seeds');
const commentdata = require('./comment-seeds');
const userActivityData = require('./userActJunc-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await userdata();
    console.log('--------------');

    await vehicledata();
    console.log('--------------');

    await locationdata();
    console.log('--------------');

    await seedActivity();
    console.log('--------------');

    await eventdata();
    console.log('--------------');

    await commentdata();
    console.log('--------------');

    await userActivityData();
    console.log('--------------');



    process.exit(0);
};

seedAll();