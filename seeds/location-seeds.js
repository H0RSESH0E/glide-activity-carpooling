const { Location } = require('../models');
const { faker } = require('@faker-js/faker');
const db = require('../config/connection');

const locationdata = async () => {
    try {
        await db.synce({ force: true });
        
        let locations = [];

        for (let i = 0; i < 100; i++) {

            let newLocation = {
                street_address: faker.address.streetAddress(),
                city: faker.address.cityName(),
                state: faker.address.state(),
                postal_code: faker.address.zipCodeByState(),
                latitude: faker.address.latitude(),
                longitude: faker.address.longitude(),
            }

            locations.push(newLocation);
        }
        locations.forEach(async (location) => {
            await Location.create(location);
        })
    } catch (err) {
        console.error(err);
    }
};

// const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = locationdata;


