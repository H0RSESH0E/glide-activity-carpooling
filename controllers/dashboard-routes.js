const router = require('express').Router();
const sequelize = require('../config/connection');
const { Activity, User, Vehicle, Comment, Event, Location } = require('../models');
const withAuth = require('../utils/auth');
const moment = require('moment');

// http://localhost:3001/dashboard
router.get('/', (req, res) => {

    Event.findAll({
        where: f,
      attributes: [
        'id',
        'event_name',
        'description',
        'time_begin',
        'time_end',
        'max_participants',
        'min_participants',
        'creator_id',
        'location_id',
        'activity_id'
      ],
      include: [
        {
          model: Activity,
          attributes: [
            'id',
            'title',
            'type',
            'category',
            'style',
            'license_required',
            'risk_level',
            'fee',
            'max_participants',
            'min_participants',
            'image_url'
          ]
        },
        {
          model: Comment,
          
          attributes: [
            'id',
            'comment_text',
            'image'
          ],
  
          include: {
            model: User,
            attributes: [
              'first_name',
              'last_name'
            ]
          }
        },
        {
          model: Location,
          attributes: [
            'city'
          ]
        }
      ]
    })
      .then(dbEventData => {
        const events = dbEventData.map(items => items.get({ plain: true }));
        events.forEach((element) =>{
          element.time_begin = moment(element.time_begin).startOf('hour').format('lll');
          element.time_end = moment(element.time_end).startOf('hour').format('lll')
        });
        let sessionInfo = req.session;
        console.log("------------------------router.get('/browse-events', authenticatedUser, (req, res) => -------------------------", sessionInfo)
        res.render('dashboard', {
          events,
          sessionInfo
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

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