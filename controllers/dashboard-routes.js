const router = require('express').Router();
const sequelize = require('../config/connection');
const { Activity, User, Vehicle, Comment, Event, Location } = require('../models');
const withAuth = require('../utils/auth');

// http://localhost:3001/dashboard
router.get('/', (req, res) => {
    res.render('dashboard');
});

// http://localhost:3001/single-event
router.get('/single-event', (req, res) => {
    res.render('signle-event');
});

// http://localhost:3001/create-vehicle
router.get('/create-vehicle', (req, res) => {
    res.render('create-vehicle');
});

//http://localhost:3001/create-event
router.get('/create-event', (req, res) => {
    res.render('create-event');
});

module.exports = router;