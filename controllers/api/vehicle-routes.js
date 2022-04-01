const router = require('express').Router();
const axios = require("axios");
const { Vehicle, Fuel, User, Activity } = require('../../models');

// ** FRONTEND **
// gather data from front end that user will be typing in :
// allow user to search for car make model ( calculate gas prices for their trip to that particular activity )
const year = localStorage.getItem('vehicleYear');
const make = localStorage.getItem('vehicleMake');
const model = localStorage.getItem('vehicleModel');

// Defining methods for fuel-routes
module.exports = {
    findByMake: function(req, res, next) {
        axios
        .get(`http://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${make}&model=${model}`)
        .then(results => {
            console.log("Vehicle Results: ", results.data);
            res.json([...results.data.fuel]);
        })
        .catch(err => console.log(err));
    },
    create: function(req, res, next) {
        models.Vehicle.create(req.body)
        .then(dbModels => res.json(dbModels))
        .catch(err => 
            res.status(400).json(err));
            console.log(err);
    },
    update: function(req, res, next) {
        models.Vehicle.findOneandUpdate({ year, make, model }, req.body)
        .then(dbModels => res.json(dbModels))
        .catch(err => 
            res.status(400).json(err));
            console.log(err);
    },
    delete: function(req, res, next) {
        models.Vehicle.findOne({ year, make, model })
        .then(dbModels => dbModels.remove())
        .then(dbModels => res.json(dbModels))
        .catch(err => 
            res.status(400).json(err));
            console.log(err);
    }
};