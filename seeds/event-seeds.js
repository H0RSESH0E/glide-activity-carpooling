const { faker } = require('@faker-js/faker');
const { Event, User, Comment } = require('../models');
const db = require('../config/connection');

const eventdata = async () => {
    try {
        await db.sync({ force: true });

        let events = [];

        for (let i = 0; i < 100; i++) {

            let newEvent = {
                event_name: faker.lorem.sentence(5),
                description: faker.lorem.paragraph(),
                location: faker.address.cityName(),
                time_begin: Math.random() * 10 + 1,
                time_end: Math.random() * 10 + 1,
                event_reviews: faker.lorem.paragraph(2),
                max_participants: faker.datatype.number({ max: 20 }),
                min_participants: faker.datatype.number({ min: 1 }),
                creator_id: Math.random() * 10 + 1,
                location_id: Math.random() * 10 + 1,
                activity_id: Math.random() * 10 + 1
            }

            events.push(newEvent);
        }
        events.forEach(async (event) => {
            await Event.create(event);
        })
    } catch (err) {
        console.error(err);
    }
};

// const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = eventdata;