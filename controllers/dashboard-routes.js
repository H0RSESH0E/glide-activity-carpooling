const router = require('express').Router();
const sequelize = require('../config/connection');
const { Activity, User, Vehicle, Comment, Event, Location } = require('../models');
const withAuth = require('../utils/auth');

// http://localhost:3001/dashboard
router.get('/', (req, res) => {

    let sessionInfo = req.session;
    res.render('dashboard',{ sessionInfo });
});

// http://localhost:3001/single-event
router.get('/single-event', (req, res) => {
    let sessionInfo = req.session;

    res.render('single-event',{ sessionInfo });
});

// http://localhost:3001/create-vehicle
router.get('/create-vehicle', (req, res) => {
    let sessionInfo = req.session;

    res.render('create-vehicle',{ sessionInfo });
});

//http://localhost:3001/create-event
router.get('/create-event', (req, res) => {
    let sessionInfo = req.session;

    res.render('create-event',{ sessionInfo });
});

module.exports = router;