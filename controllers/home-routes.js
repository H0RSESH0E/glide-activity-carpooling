const router = require('express').Router();
const sequelize = require('../config/connection');
const res = require('express/lib/response');
const path = require('path');
const { Activity, User, Vehicle, Comment, Event, Location, Participant } = require('../models');

// GET Method for all activities
router.get('/activities', (req, res) => {
  console.log('======================');
  Activity.findAllUser.findAll({ include: [{ all: true, nested: true }]
      })
      .then(dbActivityData => res.json(dbActivityData))
      
      
      res.render('activties', {
        activities,
        loggedIn: req.session.loggedIn
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    // path for /login, if loggedIn 
  router.get('/login', (req, res) => {
    res.render('login');
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
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login')
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;