const { faker } = require('@faker-js/faker');
const { Vehicle, User } = require('../models');

const vehicledata = async () => {
    try {
        
        // Declare variable and set it equal to an array
        let vehicles = [];

        for (let i = 0; i < 10; i++) {

            let newVehicle = {
                year: faker.datatype.number({ max: 2022 }),
                make: faker.vehicle.manufacturer(),
                model: faker.vehicle.model(),
                fuel_eco: faker.vehicle.fuel(),
                color: faker.vehicle.color(),
                max_passengers: faker.datatype.number({ max: 20 }),
                user_id: Math.floor(Math.random() * 10 + 1)
            }

        vehicles.push(newVehicle);
        }
        console.log(vehicles);
       await Vehicle.bulkCreate(vehicles);
    } catch (err) {
        console.error(err);
    }
};

module.exports = vehicledata;