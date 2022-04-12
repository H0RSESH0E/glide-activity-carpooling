const { faker } = require('@faker-js/faker');
const { Event, User, Comment } = require('../models');


randomDate = () => {
    let start = new Date().getTime() + (1 * 24 * 60 * 60 * 1000);
    let end = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
    let dates = []
    let begin = new Date(start + Math.random() * (end- start));
    let finish = new Date(begin.getTime() +  Math.random() * (end - begin));
    dates.push(begin);
    dates.push(finish);
    return dates;
}

const eventdata = async () => {
    try {
        let events = [];

        for (let i = 0; i < 10; i++) {
            let dates = randomDate();

            let newEvent = {
                event_name: faker.lorem.sentence(5),
                description: faker.lorem.paragraph(),
                location: faker.address.cityName(),
                time_begin: dates[0],
                time_end: dates[1],
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