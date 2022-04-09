const { faker } = require('@faker-js/faker');
const { Event, User, Comment } = require('../models');
var moment = require('moment'); 


const eventdata = async () => {
    try {
        let events = [];

        for (let i = 0; i < 10; i++) {
            let start = moment(new Date()).format("MMM Do YY");

            let newEvent = {
                event_name: faker.lorem.sentence(5),
                description: faker.lorem.paragraph(),
                location: faker.address.cityName(),
                time_begin: start,
                time_end: start,
                event_reviews: faker.lorem.paragraph(2),
                max_participants: faker.datatype.number({ min:5, max: 40 }),
                min_participants: faker.datatype.number({ min: 2, max: 5 }),
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