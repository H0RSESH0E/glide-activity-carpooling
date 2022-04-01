// const router = require('express').Router();
const axios = require("axios");
const models = require('../../models');

// Defining methods for fuel-routes
module.exports = {
    findAll: function(req, res, next) {
        if (req.query === "") {
            req.query = "fuelPrices";       //**** rest/${req.query}
        }
        axios
        .get(`http://www.fueleconomy.gov/ws/rest/${req.query}`)
        .then(results => {
            console.log("Fuel Prices Results: ", results.data);
            res.json([...results.data.fuel]);
        })
        .catch(err => console.log(err));
    },
    findById: function(req, res, next) {
        axios
        .get(`http://www.fueleconomy.gov/ws/rest/${req.params.id}`)
        .then(results => {
            console.log("Fuel Prices Results: ", results.data);
            res.json([...results.data.fuel]);
        })
        .catch(err => console.log(err));
    },
    create: function(req, res, next) {
        models.Fuel.create(req.body)
        .then(dbModels => res.json(dbModels))
        .catch(err => 
            res.status(400).json(err));
            console.log(err);
    },
    update: function(req, res, next) {
        models.Fuel.findOneandUpdate({ _id: req.params.id }, req.body)
        .then(dbModels => res.json(dbModels))
        .catch(err => 
            res.status(400).json(err));
            console.log(err);
    },
    delete: function(req, res, next) {
        models.Fuel.findOne({ fuelPrices: req.body.id })
        .then(dbModels => dbModels.remove())
        .then(dbModels => res.json(dbModels))
        .catch(err => 
            res.status(400).json(err));
            console.log(err);
    }
};


// // GET all fuel prices data from fuelEconomy.gov API
// router.get("/", async (req, res, next) => {
//     console.log("FUEL PRICES: ");
//     try {
//         // gather data from front end that user will be typing in :
//         // allow user to select the fuel they desire ( calculate fuel price for their trip to that particular activity )
        
//         const res = await 
//     }
//     catch(err){
//         console.error("No fuel price found", err);
//     }
// });

// // GET a single fuel price data from fuelEconomy.gov API
// router.get('/:id', async (req, res) => {
//     try {
//         const dbFuelData = await axios.get("http://www.fueleconomy.gov/ws/rest/" + fuelPrice)
//         .then(data => res.status(200).send(data))
//         .catch(err => res.send(err));
    
//         if (!dbFuelData) {
//             res.status(404).json({ message: 'No fuel price found with that id!' });
//             return;
//         }
//     }
//     res.status(200).json(dbFuelData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });
  
//   // POST a single fuel price data from fuelEconomy.gov API
//   router.post('/', async (req, res) => {
//     try {
//       // Since the model will create a unique UUID value by default, we just need to provide the `id` of the Reader that will own this card
//       const res = await axios.post("http://www.fueleconomy.gov/ws/rest/" + fuelPrice)
//       res.status(200).json(locationData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
  
//   // DELETE 
//   router.delete('/:id', async (req, res) => {
//     try {
//       const dbFuelData = await axios.delete("http://www.fueleconomy.gov/ws/rest/" + fuelPrice)
//         where: {
//           id: req.params.id,
//         },
//       });
  
//       if (!dbFuelData) {
//         res.status(404).json({ message: 'No fuel price found with that id!' });
//         return;
//       }
  
//       res.status(200).json(dbFuelData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });