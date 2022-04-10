const router = require('express').Router();
const { Activity, User, Vehicle, Comment, Event, Location, } = require('../../models');
//update
router.put('/:id', (req, res) => {
    User.update({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email,

        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;