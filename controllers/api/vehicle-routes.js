const router = require('express').Router();
const { Vehicle, Activity, User, Comment, Event, Location, } = require('../../models');

// GET /api/vehicle
router.get('/', (req, res) => {
    // Access our Vehicle model and run .findAll() method to find all vehicles
    Vehicle.findAll({
        include: [
        {
            model: User,
            attributes: ['user_id']
        },
        {
            model: Location,
            attributes: ['street_number', 'street', 'city', 'province', 'postal_code']
        }
    ]
    })
    .then(dbVehicleData => res.json(dbVehicleData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/vehicle/1
router.get('/:id', (req, res) => {
    // Query operation to find one vehicle
    Vehicle.findOne({
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
                    model: Activity,
                    attributes: ['']
                }
            }
            // {
            //     model: User,
            //     attributes: [''],
            //     through: 
            // }
        ]
    })
    .then(dbVehicleData => {
        if (!dbVehicleData) {
            res.status(404).json({ message: 'No vehicle found with this id' });
            return;
        }
        res.json(dbVehicleData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/vehicle
router.post('/', (req, res) => {
    // Query operation to create a vehicle
    Vehicle.create({
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        fuel_eco: req.body.fuel_eco,
        driver: req.body.driver
    })
    .then(dbVehicleData => res.json(dbVehicleData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT /api/vehicle/1
router.put('/:id', (req, res) => {
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Vehicle.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbVehicleData => {
        if (!dbVehicleData[0]) {
            res.status(404).json({ message: 'No vehicle found with this id' });
            return;
        }
        res.json(dbVehicleData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/vehicle/1
router.delete('/:id', (req, res) => {
    Vehicle.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbVehicleData => {
        if (!dbVehicleData) {
            res.status(404).json({ message: 'No vehicle found with this id.' });
            return;
        }
        res.json(dbVehicleData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;