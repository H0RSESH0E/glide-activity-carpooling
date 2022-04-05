const router = require('express').Router();
const path = require('path');
const sequelize = require('sequelize');
const { Activity, User, Vehicle, Comment, Event, Location, Participant } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

// path for /login, if loggedIn 
router.get('/login', (req, res) => {
    // res.render('login');
    res.render('login', {
        last_name: req.user.last_name, // <-- line 10 and if I remove this it goes to line 11
        first_name: req.user.first_name, // <-- line 10 and if I remove this it goes to line 11
    });
});

// get all posts for homepage
// router.get('/', (req, res) => {
//     console.log('======================');
//     Vehicle.findAll({
//             attributes: [
//                 'id',
//                 'year',
//                 'make',
//                 'model'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'image', 'user_id']
//                 },
//                 {
//                     model: User,
//                     exclude: ['password'],
//                     attributes: ['first_name', 'last_name', 'email']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             const posts = dbPostData.map(post => post.get({ plain: true }));

//             res.render('homepage', {
//                 posts,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// get single post
// router.get('/post/:id', (req, res) => {
//     Post.findOne({
//             where: {
//                 id: req.params.id
//             },
//             attributes: [
//                 'id',
//                 'post_url',
//                 'title',
//                 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }

//             const post = dbPostData.get({ plain: true });

//             res.render('single-post', {
//                 post,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// login.html - login page
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login')
// });

router.get('/signup', (req, res) => {
    res.render('signup');
});
module.exports = router;