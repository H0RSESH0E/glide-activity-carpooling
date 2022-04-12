// Variable for history of searched fuel prices (? used rather than writing out an if statement)
const searchedVehicles = JSON.parse(localStorage.getItem('searchedVehiclesHistory'))?JSON.parse(localStorage.getItem('searchedVehiclesHistory')):[];

// Variable for fuel prices searched by user
const vehicles = localstorage.getItem('vehicles');

// Variables for Search for fuel economy
const searchInputEl = $("#vehicle-input");
const searchButtonEl = $("#vehicle-search-btn");

// function to fetch vehicle data


// When searchButtonEl is clicked..
$(searchButtonEl).on("click", function(e) {
    e.preventDefault();

    // Set localStorage to textarea id's and trimmed value of searched cities
    let vehiclesSearched = searchInputEl.val().trim();
    console.log(vehiclesSearched);  

    vehicles = vehiclesSearched;

    // Push to localStorage if search history exists
    if (searchedVehicles.indexOf(vehiclesSearched) === -1) {
        searchedVehicles.push(vehiclesSearched);
        localStorage.setItem('searchedVehiclesHistory', JSON.stringify(searchedVehicles));
    
        // Call fetchFuelPrices & searchHistoryButtons function
        fetchFuelPrices();
    }
    console.log(searchedVehicles);

    // Local Storage for setting user's searched cities
    localStorage.setItem('vehicles', vehiclesSearched);
});

// call fetchFuelPrices function
fetchFuelPrices();

// findByMake: function(req, res, next) {
//     axios
//     .get(`http://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${make}&model=${model}`)
//     .then(results => {
//         console.log("Vehicle Results: ", results.data);
//         res.json([...results.data.fuel]);
//     })
//     .catch(err => console.log(err));
// },
// create: function(req, res, next) {
//     models.Vehicle.create(req.body)
//     .then(dbModels => res.json(dbModels))
//     .catch(err => 
//         res.status(400).json(err));
//         console.log(err);
// },
// update: function(req, res, next) {
//     models.Vehicle.findOneandUpdate({ year, make, model }, req.body)
//     .then(dbModels => res.json(dbModels))
//     .catch(err => 
//         res.status(400).json(err));
//         console.log(err);
// },
// delete: function(req, res, next) {
//     models.Vehicle.findOne({ year, make, model })
//     .then(dbModels => dbModels.remove())
//     .then(dbModels => res.json(dbModels))
//     .catch(err => 
//         res.status(400).json(err));
//         console.log(err);
// }