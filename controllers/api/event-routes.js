const router = require('express').Router();
const { Event, Activity, User, Vehicle, Comment, Location, } = require('../../models');

// GET /api/event
router.get('/', (req, res) => {
    // Access our Event model and run .findAll() method to find all events
    Event.findAll({ include: [{ all: true, nested: true }]})
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
                attributes: ['street_number', 'street', 'city', 'province', 'postal_code']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Vehicle,
                    attributes: ['year', 'make', 'model']
                }
            //     {
            //         moderl: Activity,
            //         attributes: ['']
            //     }
            }
            // {
            //     model: Vehicle,
            //     attributes: [''],
            //     through: User
            // }
        ]
    })
    .then(dbEventData => {
        if (!dbEventData) {
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

// POST /api/event
router.post('/', (req, res) => {
    // Query operation to create a event
    Event.create({
        event_name: req.body.event_name,
        description: req.body.description,
        location: req.body.location,
        time_begin: req.body.time_begin,
        time_end: req.body.time_end,
        event_reviews: req.body.event_reviews,
        max_participants: req.body.max_participants,
        min_participants: req.body.min_participants,
        user_id: req.body.user_id,
        comment_id: req.body.comment_id
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