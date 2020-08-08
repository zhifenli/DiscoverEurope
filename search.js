var countryToCities = {
    england: ["london", "oxford", "york", "bath", "cambridge", "liverpool", "stratford-upon-avon", "manchester"],
    france: ["paris", "bordeaux", "lyon", "marseille", "nice", "strasbourg", "lille", "chamonix"],
    germany: ["berlin", "munich", "frankfurt", "hamburg", "hanover", "stuttgart", "bremen", "dresden"],
    ireland: ["dulin", "dingle town", "belfast" "cork city", "galeay", "derry", "kilkenny", "limerick" ],
    italy: ["rome", "venice", "milan", "florence", "naples", "palermo", "siena", "turin"],
    scotland: ["Edinburgh", "Glasgow", "Aberdeen", "St-Andrews", "Oban", "Inverness", "Kirkwall", "Stirling" ],
    spain: ["barcelona", "madrid", "valencia", "seville", "granada", "bilbao", "malaga", "cordoba"],
    sweden: ["stockholm", "gothenburg", "uppsala", "visby", "lund", "helsingborg", "ystad", "karlskrona"]
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