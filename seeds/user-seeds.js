const sequelize = require('../config/connection');
const { faker } = require('@faker-js/faker');
const { User, Comment, Vehicle } = require('../models');
const db = require('../config/connection');

const userdata = async () => {
    try {
        await db.sync({ forcxe: true });

        let users = [];

        for (let i = 0; i < 100; i++) {

            let newUser = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }

        users.push(newUser);
        }
        users.forEach(async (user) => {
            await User.create(user);
        })
    } catch (err) {
        console.error(err);
    }
};

// const seedUser = () => User.bulkCreate(userdata, ({ individualHooks: true }));

module.exports = userdata;