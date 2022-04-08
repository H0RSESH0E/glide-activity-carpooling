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
    res.render('signup', {views: ['signup.handlebars']});
  }
});

// GET method for authenticated user to homepage
router.get('/homepage', authenticatedUser, (req, res) => {
  res.render('homepage', {views: ['homepage.handlebars']});
});

// // GET method to popular activities
// router.get('/popular-activities', authenticatedUser, (req, res) => {
//   if (req.session.loggedIn) {
//     res.render('popular-activities', { partialsDir: ['partials/popular-activities.handlebars']});
//   } 
//   // else {
//   //   res.render('login', {views: ['login.handlebars']});
//   // }
// });

// GET method to single event
router.get('/single-event', (req, res) => {
  if (req.session.loggedIn) {
    res.render('single-event', { partials: ['single-event.handlebars']});
  } 
  // else {
  //   res.render('login', {views: ['login.handlebars']});
  // }
});

// GET method to create vehicle
router.get('/create-vehicle', (req, res) => {
  if (req.session.loggedIn) {
    res.render('create-vehicle', { views: ['create-vehicle.handlebars']});
  } 
  // else {
  //   res.render('login', {views: ['login.handlebars']});
  // }
});

// GET method to create events
router.get('/create-event', (req, res) => {
  if (req.session.loggedIn) {
    res.render('create-event', { views: ['create-event.handlebars']});
  } 
  // else {
  //   res.render('login', {views: ['login.handlebars']});
  // }
});

// GET method to profile edit
router.get('/profile-edit', authenticatedUser, (req, res) => {
  if (req.session.loggedIn) {
    res.render('profile-edit', { views: ['profile-edit.handlebars']});
  } 
  // else {
  //   res.render('login', {views: ['login.handlebars']});
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

//http://localhost:3001/popular-activities
router.get('/popular-activities', (req, res) => {
  res.render('popular-activities', { test: 'test text'});
});


module.exports = router;