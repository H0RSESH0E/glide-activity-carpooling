const { Location } = require('../models');
const { faker } = require('@faker-js/faker');

const locationdata = async () => {
    try {
        
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
        await Location.bulkCreate(locations);
    } catch (err) {
        console.error(err);
    }
};

module.exports = locationdata;


