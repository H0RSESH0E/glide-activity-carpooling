const router = require('express').Router();
const { Activity, User, Vehicle, Comment, Event, Location, } = require('../../models');

// GET /api/activity
router.get('/', (req, res) => {
    Activity.findAll({ include: [{ all: true, nested: true }]})
    .then(dbActivityData => res.json(dbActivityData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/activity
router.post('/', (req, res) => {
    Activity.create({
        title: req.body.activity_name,
        type: req.body.type,
        category: req.body.category,
        style: req.body.style,
        license_required: req.body.license_required,
        risk_level: req.body.risk_level,
        fee: req.body.fee,
        equipment: req.body.equipment,
        max_participants: req.body.max_participants,
        min_participants: req.body.min_participants
    })
    .then(dbActivityData => res.json(dbActivityData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// DELETE /api/activity/1
router.delete('/:id', (req, res) => {
    Activity.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbActivityData => {
        if (!dbActivityData) {
            res.status(404).json({ message: 'No activity found with this id!' });
            return;
        }
        res.json(dbActivityData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;