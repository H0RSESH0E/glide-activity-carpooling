const { Vehicle } = require('../models');

const vehicledata = [
    {
        year: faker.random.number(),
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        fuel_eco: faker.vehicle.fuel(),
        color: faker.vehicle.color(),
        max_passengers: faker.random.number({ max: 20 }),
        // vehicle: faker.vehicle.vehicle()
    }
];

const seedVehicle = () => Vehicle.bulkCreate(vehicledata);

module.exports = seedVehicle;