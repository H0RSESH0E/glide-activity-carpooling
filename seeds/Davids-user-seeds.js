const sequelize = require('../config/connection');
const { faker } = require('@faker-js/faker');
const { User, Comment, Vehicle } = require('../models');

userDataArr = []

for (i = 0; i < 100; i++) {

    userDataArr[i] = {};
    userDataArr[i]['first_name'] = fake.




    let eachUser = 
    {
    first_name: faker.name.first_name(),
    last_name: faker.name.last_name(),
    email: faker.internet.email(),
    password: faker.internet.password()
    }

}

// const userdata = [
//     {
//     first_name: faker.name.first_name(),
//     last_name: faker.name.last_name(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//     }
// ];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;