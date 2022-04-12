const router = require('express').Router();
const { Location, Vehicle, Activity, User, Comment, Event } = require('../../models');

// GET /api/location
router.get('/', (req, res) => {
    // Access our Location model and run .findAll() method to find all locations
    Location.findAll({ include: [{ all: true, nested: true }]
    })
    .then(dbLocationData => res.json(dbLocationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/location/1
router.get('/:id', (req, res) => {
    // Query operation to find one location
    Location.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Vehicle,
            attributes: ['id','year', 'make', 'model', 'fuel_eco', 'color', 'max_passengers']
        },
        {
            model: Event,
            attributes: ['id', 'event_name', 'description', 'location', 'time_begin', 'time_end', 'event_reviews', 'max_participants', 'min_participants', ' creator_id', 'location_id', 'activity_id']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'created_at'],
            include: {
                model: Activity,
                attributes: ['id', 'title', 'type', 'category', 'style', 'license_required', 'risk_level', 'fee', 'equipment', 'max_participants', 'min_participants']
            }
        }
        ]
    })
    .then(dbLocationData => {
        if (!dbLocationData) {
            res.status(404).json({ message: 'No location found with this id' });
            return;
        }
        res.json(dbLocationData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/location
router.post('/', (req, res) => {
    // Query operation to create a location
    Location.create({
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        postal_code: req.body.postal_code,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        })
        .then(dbLocationData => res.json(dbLocationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/location/1
router.put('/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Location.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbLocationData => {
            if (!dbLocationData[0]) {
                res.status(404).json({ message: 'No location found with this id' });
                return;
            }
            res.json(dbLocationData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/location/1
router.delete('/:id', (req, res) => {
    Location.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbLocationData => {
            if (!dbLocationData) {
                res.status(404).json({ message: 'No location found with this id.' });
                return;
            }
            res.json(dbLocationData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;