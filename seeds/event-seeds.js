const { faker } = require('@faker-js/faker');
const { Event, User, Comment } = require('../models');

const eventdata = async () => {
    try {

        let events = [];

        for (let i = 0; i < 10; i++) {

            let newEvent = {
                event_name: faker.lorem.sentence(5),
                description: faker.lorem.paragraph(),
                location: faker.address.cityName(),
                time_begin: Math.floor(Math.random() * 24 + 1),
                time_end: Math.floor(Math.random() * 24 + 1),
                event_reviews: faker.lorem.paragraph(2),
                max_participants: faker.datatype.number({ max: 20 }),
                min_participants: faker.datatype.number({ min: 1 }),
                creator_id: Math.floor(Math.random() * 10 + 1),
                location_id: Math.floor(Math.random() * 10 + 1),
                activity_id: Math.floor(Math.random() * 10 + 1)
            }

            events.push(newEvent);
        }
        await Event.bulkCreate(events);
    } catch (err) {
        console.error(err);
    }
};

module.exports = eventdata;