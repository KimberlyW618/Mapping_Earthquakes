// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
/*
// create the tile layer that will be the background of our map.
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
}).addTo(map);

// Get data from cities.js
let cityData = cities;

/*
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
});

// edited ^ to have the bindpopup - (with (.toLocaleString()) to add formating to the pop #)
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});
*/
/*
// edited ^ to be a circle w radious as the pop#
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});

*/

//////////// making it dark and orange circles 

// Create a dark street tile layer that will be the background of our map.
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// edited ^ to be a circle w radious as the pop#
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000,
    color: "orange"
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});