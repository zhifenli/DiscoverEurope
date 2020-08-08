var countryToCities = {
    england: ["london", "oxford"],
    france: ["paris"],
    germany: [],
    ireland: [],
    italy: [],
    scotland: [],
    spain: [],
    sweden: []
};

function getUrlOfCountry(country) {
    return `${country}.html`;
}

function search() {
    console.log("search")
    var inputElem = document.getElementById("search-input");
    if (!inputElem) {
        console.error("Cannot find search input element.");
        return;
    }
    var searchCity  = inputElem.value;
    searchByCity(searchCity);
}

function searchByCity(searchCity) {
    for (var country in countryToCities) {  // loop through all keys  ( countries )
        var cityArray = countryToCities[country];
        for (var city of cityArray) { // loop through all cities
            if (searchCity.toLowerCase() === city.toLowerCase()) { // found the city in this country
                console.log("found city " + searchCity + " within country " + country);
                window.open(getUrlOfCountry(country), "_self");
                return;
            }
        }
    }
    alert("Cannot find city: " + searchCity);
}