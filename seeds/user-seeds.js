const sequelize = require('../config/connection');
const { faker } = require('@faker-js/faker');
const { User, Comment, Vehicle } = require('../models');

const userdata = [{
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUser;