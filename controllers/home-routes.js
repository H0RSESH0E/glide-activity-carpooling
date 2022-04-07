const router = require('express').Router();
const authenticatedUser = require("../utils/auth.js");
const sequelize = require('../config/connection');
const res = require('express/lib/response');
const path = require('path');
const { Activity, User, Vehicle, Comment, Event, Location, Participant } = require('../models');

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/homepage");
  } else {
    res.render('signup', {js: ['signup.handlebars']});
  }
});

// GET method for authenticated user to homepage
router.get('/homepage', authenticatedUser, (req, res) => {
  res.render('homepage', {js: ['homepage.handlebars']});
});

// // GET method to popular activities
// router.get('/popular-activities', authenticatedUser, (req, res) => {
//   if (req.session.loggedIn) {
//     res.render('popular-activities', { js: ['popular-activities.handlebars']});
//   } 
//   // else {
//   //   res.render('login', {js: ['login.handlebars']});
//   // }
// });

// GET method to single event
router.get('/single-event', authenticatedUser, (req, res) => {
  if (req.session.loggedIn) {
    res.render('single-event', { js: ['single-event.handlebars']});
  } 
  // else {
  //   res.render('login', {js: ['login.handlebars']});
  // }
});

// GET method to create vehicle
router.get('/create-vehicle', authenticatedUser, (req, res) => {
  if (req.session.loggedIn) {
    res.render('create-vehicle', { js: ['create-vehicle.handlebars']});
  } 
  // else {
  //   res.render('login', {js: ['login.handlebars']});
  // }
});

// GET method to create events
router.get('/create-event', authenticatedUser, (req, res) => {
  if (req.session.loggedIn) {
    res.render('create-event', { js: ['create-event.handlebars']});
  } 
  // else {
  //   res.render('login', {js: ['login.handlebars']});
  // }
});

// GET method to profile edit
router.get('/profile-edit', authenticatedUser, (req, res) => {
  if (req.session.loggedIn) {
    res.render('profile-edit', { js: ['profile-edit.handlebars']});
  } 
  // else {
  //   res.render('login', {js: ['login.handlebars']});
  // }
});

// GET metho to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login')
});

// GET method to signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;