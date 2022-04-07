const { faker } = require('@faker-js/faker');
const { Vehicle } = require('../models');
const db = require('../config/connection');

const vehicledata = async () => {
    try {
        await db.sync({ force: true });
        
        // Declare variable and set it equal to an array
        let vehicles = [];

        for (let i = 0; i < 100; i++) {

            let newVehicle = {
                year: faker.datatype.number(4),
                make: faker.vehicle.manufacturer(),
                model: faker.vehicle.model(),
                fuel_eco: faker.vehicle.fuel(),
                color: faker.vehicle.color(),
                max_passengers: faker.datatype.number({ max: 20 }),
            }

        vehicles.push(newVehicle);
        }
        vehicles.forEach(async (vehicle) => {
            await Vehicle.create(vehicle);
        })
    } catch (err) {
        console.error(err);
    }
};

// const seedVehicle = () => Vehicle.bulkCreate(vehicledata);

module.exports = vehicledata;