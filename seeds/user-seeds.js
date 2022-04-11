const { faker } = require('@faker-js/faker');
const { User, Comment, Vehicle } = require('../models');

const userdata = async () => {
    try {

        let users = [{
            first_name: 'jane',
            last_name: 'doe',
            email: 'janedoe@email.com',
            password: 'password1'
        }];

        for (let i = 0; i < 10; i++) {

            let newUser = {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }

        users.push(newUser);
        }
        console.table(users);
        await User.bulkCreate(users, ({ individualHooks: true }));
    } catch (err) {
        console.error(err);
    }
};

module.exports = userdata;