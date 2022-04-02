const router = require('express').Router();
const path = require('path');

// index.html - landing page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// login page

// 

// about-us.html
// router.get('/abous-us', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/about-us.html'));
// });

// activities.html
router.get('/activities', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/activities.html'));
});

// fuel-economy.html - calculator
// router.get('/fuel-economy', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/fuel-economy.html'));
// });

// contact-us.html
router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact-us.html'));
});

// "catch-all.html" - sends request no
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;