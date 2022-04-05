const { Participant, User, Comment } = require('../models');
const { faker } = require('@faker-js/faker');


const participantdata = [
    { 
        organizer: faker.word.interjection(),
        type: faker.word.adjective(),
        user_id: faker.random.number(),
        event_id: faker.random.number()
    }
];

const seedParticipant = () => Participant.bulkCreate(participantdata);

module.exports = seedParticipant;