const { Event, User, Comment } = require('../models');

const eventdata = [
    {
        event_name: faker.lorem.sentence(5),
        description: faker.lorem.paragraph(),
        location: faker.address.cityName(),
        time_begin: faker.time.recent('abbr'),
        time_end: faker.time.recent('abbr'),
        event_reviews: faker.lorem.paragraph(2),
        max_participants: faker.random.number({ max: 20 }),
        min_participants: faker.random.number({ min: 1 })
        // user_id: faker.random.number(),
        // comment_id: faker.random.number(),
        // driver_id: faker.random.number
    }
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;