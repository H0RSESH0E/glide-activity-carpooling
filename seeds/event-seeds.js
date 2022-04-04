const { Event } = require('../models');

const eventdata = [
    {
        event_name: faker.lorem.sentence(5),
        description: faker.lorem.paragraph(),
        location: 
        time_begin: 
        time_end: 
        event_reviews: faker.lorem.paragraph(2),
        max_participants: faker.random.number({ max: 20 }),
        min_participants: faker.random.number({ min: 1 })
        // user_id: 
        // comment_id: 
        // driver_id: 
    }
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;