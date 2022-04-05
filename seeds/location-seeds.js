const { Location } = require('../models');
const { faker } = require('@faker-js/faker');


const locationdata = [
    {
    street_address: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    postal_code: faker.address.zipCodeByState(),
    lattitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    }
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;


