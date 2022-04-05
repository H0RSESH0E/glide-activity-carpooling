const { Comment } = require('../models');
const { faker } = require('@faker-js/faker');


const commentdata = [
    {
        // Word, words, sentences, slug (lorem-ipsum), paragraph(s), text, lines
        comment_text: faker.lorem.paragraph(3),
        // Returns a random image url.
        image: faker.random.image()
        // user_id: 
        // event_id: 
    }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;