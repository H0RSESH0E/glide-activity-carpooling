const router = require('express').Router();
const sequelize = require('../config/connection');
const { Activity, User, Vehicle, Comment, Event, Location } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('dashboard');
});

module.exports = router;