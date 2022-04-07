const { faker } = require('@faker-js/faker');
const { Comment } = require('../models');

const commentdata = async () => {
    try {

        let comments = [];

        for (let i = 0; i < 10; i++) {

            let newComment = {
                // Word, words, sentences, slug (lorem-ipsum), paragraph(s), text, lines
                comment_text: faker.lorem.paragraph(3),
                // Returns a random image url.
                image: faker.image.nature(),
                event_id: Math.floor(Math.random() * 10 + 1),
                user_id: Math.floor(Math.random() * 10 + 1)
            }

        comments.push(newComment);
        }
        await Comment.bulkCreate(comments);
    } catch (err) {
        console.error(err);
    }
};

module.exports = commentdata;