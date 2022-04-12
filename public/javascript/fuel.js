// Variable for history of searched fuel prices (? used rather than writing out an if statement)
const searchedFuelPrices = JSON.parse(localStorage.getItem('searchedFuelHistory'))?JSON.parse(localStorage.getItem('searchedFuelHistory')):[];

// Variable for fuel prices searched by user
const fuelPrices = localstorage.getItem('fuelPrices');

// Variables for Search for fuel economy
const searchInputEl = $("#fuel-input");
const searchButtonEl = $("#fuel-search-btn");

function fetchFuelPrices() {
    fetch("http://www.fueleconomy.gov/ws/rest/" + fuelPrices)
    .then(function (response) {
        console.log("Fuel Prices Results: ", results.data);
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        
    });
};

// When searchButtonEl is clicked..
$(searchButtonEl).on("click", function(e) {
    e.preventDefault();

    // Set localStorage to textarea id's and trimmed value of searched cities
    let fuelPricesSearched = searchInputEl.val().trim();
    console.log(fuelPricesSearched);  

    fuelPrices = fuelPricesSearched;

    // Push to localStorage if search history exists
    if (searchedFuelPrices.indexOf(fuelPricesSearched) === -1) {
        searchedFuelPrices.push(fuelPricesSearched);
        localStorage.setItem('searchedFuelHistory', JSON.stringify(searchedFuelPrices));
    
        // Call fetchFuelPrices & searchHistoryButtons function
        fetchFuelPrices();
    }
    console.log(searchedFuelPrices);

    // Local Storage for setting user's searched cities
    localStorage.setItem('fuelPrices', fuelPricesSearched);
});

// call fetchFuelPrices function
fetchFuelPrices();

// function create() {
//     models.Fuel.create(req.body)
//     .then(dbModels => res.json(dbModels))
//     .catch(err => 
//         res.status(400).json(err));
//         console.log(err);
// };
// function update() {
//     models.Fuel.findOneandUpdate({ _id: req.params.id }, req.body)
//     .then(dbModels => res.json(dbModels))
//     .catch(err => 
//         res.status(400).json(err));
//         console.log(err);
// },
// function delete() {
//     models.Fuel.findOne({ fuelPrices: req.body.id })
//     .then(dbModels => dbModels.remove())
//     .then(dbModels => res.json(dbModels))
//     .catch(err => 
//         res.status(400).json(err));
//         console.log(err);
// }