const router = require('express').Router();

//collect all of the API routes and package them up

const userRoutes = require('./user-routes.js');
const activityRoutes = require('./activity-routes');
const fuelRoutes = require('./fuel-routes');
const vehicleRoutes = require('./vehicle-routes');
// const locationRoutes = require('./location-routes');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/activity', activityRoutes);
router.use('/fuel', fuelRoutes);
router.use('/vehicles', vehicleRoutes);
// router.use('/location', locationRoutes);
// router.use('/comment', commentRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;