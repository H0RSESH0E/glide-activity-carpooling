const router = require('express').Router();
const sequelize = require('../config/connection');
const res = require('express/lib/response');
const path = require('path');
const db = require('../models');

// GET Method for all activities
router.get('/activities', (req, res) => {
  console.log('======================');
  Activity.findAll()
    .then(activities => {
      // create new array of activities
      const activityInput = [
        [], [], [], [], [], [], [], [], [], []
      ];
      // const activities = dbActivityData.map(activity => activity.get({ plain: true }));

      // loop over all Activities
      activities.forEach((Activity) => {
        activityInput.push(Activity);
      });
      res.render('homepage', {
        activities,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST Method for Activities
router.post('/activities', (req, res) => {
  db.Activity.create(
    req.body
  )
    .then(dbActivityData => {
      if (!dbActivityData) {
        res.status(404).json({ message: 'No activity found with this id' });
        return;
      }

      const activity = dbActivityData.get({ plain: true });

      res.render('single-activity', {
        activity,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

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