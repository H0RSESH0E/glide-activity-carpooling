const router = require('express').Router();
const { Event, Activity, User, Vehicle, Comment, Location, } = require('../../models');
const moment = require('moment');



// GET /api/event
router.get('/', (req, res) => {
    // Access our Event model and run .findAll() method to find all events
    Event.findAll({ include: [{ all: true, nested: true }] })
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/event/1
router.get('/:id', (req, res) => {
    // Query operation to find one event
    Event.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Location,
                attributes: ['street_address', 'city', 'state', 'postal_code', 'latitude', 'longitude']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],

            },
            {
                model: Activity,
                attributes: ['id', 'title', 'type', 'category', 'style', 'license_required', 'risk_level', 'fee', 'max_participants', 'min_participants', 'image_url']
            },
            {
                model: User,
                attributes: ['id', 'first_name', 'last_name', 'email'],
                include: [
                    {
                        model: Vehicle,
                        attributes: ['year', 'make', 'model', 'fuel_eco', 'color', 'max_passengers', 'user_id']
                    }
                ]

            }
        ]
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: 'No event found with this id' });
                return;
            }
            let sessionInfo = req.session;
            const event = dbEventData.get({ plain: true });
            console.log(event);
            event.time_begin = moment(event.time_begin).startOf('hour').format('lll');
            event.time_end = moment(event.time_end).startOf('hour').format('lll')


            res.render('single-event', {
                event,
                sessionInfo
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/event
router.post('/', (req, res) => {
    // Query operation to create a event
    Event.create({
        event_name: req.body.event_name,
        description: req.body.description,
        time_begin: req.body.time_begin,
        time_end: req.body.time_end,
        event_reviews: req.body.event_reviews,
        max_participants: req.body.max_participants,
        min_participants: req.body.min_participants,
        creator_id: req.body.creator_id,
        user_id: req.body.user_id,
        activity_id: req.body.activity_id
    })
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/event/1
router.put('/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Event.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbEventData => {
            if (!dbEventData[0]) {
                res.status(404).json({ message: 'No event found with this id' });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/event/1
router.delete('/:id', (req, res) => {
    Event.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: 'No event found with this id.' });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;