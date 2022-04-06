const { faker } = require('@faker-js/faker');
const { Comment } = require('../models');
const db = require('../config/connection');

const commentdata = async () => {
    try {
        await db.sync({ force: true });

        let comments = [];

        for (let i = 0; i < 100; i++) {

            let newComment = {
                // Word, words, sentences, slug (lorem-ipsum), paragraph(s), text, lines
                comment_text: faker.lorem.paragraph(3),
                // Returns a random image url.
                image: faker.image.nature(),
                user_id: Math.random() * 10 + 1
            }

        comments.push(newComment);
        }
        comments.forEach(async (comment) => {
            await Comment.create(comment);
        })
    } catch (err) {
        console.error(err);
    }
};

// const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = commentdata;