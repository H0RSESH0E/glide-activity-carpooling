const sequelize = require('../config/connection');
const { faker } = require('@faker-js/faker');
const { User, Comment, Vehicle } = require('../models');
const db = require('../config/connection');

const userdata = async () => {
    try {
        await db.sync({ force: true });

        let users = [];

        // admin example user for testing purposes
        let newUser = {
            first_name: 'admin',
            last_name: 'example',
            email: 'admin@example.com',
            password: 'password'
        }

        // 100 generated random users
        for (let i = 0; i < 100; i++) {

            newUser = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }

        users.push(newUser);
        }
        users.forEach(async (user) => {
            try {
                await User.create(user);
            } catch (e) {
                console.log(e);
            }
        })
    } catch (err) {
        console.error(err);
    }
};

// const seedUser = () => User.bulkCreate(userdata, ({ individualHooks: true }));

module.exports = userdata;