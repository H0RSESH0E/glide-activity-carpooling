const { Participant, User, Comment } = require('../models');

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