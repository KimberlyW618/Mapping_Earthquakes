// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "state":"California",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Please note that the coordinates appear in reverse order [-122.375, 37.61899948120117], 
// compared to their order in the setView() method. This is because the GeoJSON data coordinates 
// are set with the first parameter as X (longitude) and the second parameter as Y (latitude)

// create the GeoJSON layer and add to map  // L.geoJSON(geojsonFeature).addTo(map);
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);


// Create the street view tile layer that will be the background of our map and add to the map
// this first two lines provid the source and call for the reg street view 
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}).addTo(map);

/*
// Create a dark street tile layer that will be the background of our map and add it.
// this first two lines provid the source for the code to call the kind of background needed like "dark-v10" or sny other of ther basic ones 
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
}).addTo(map);
*/


//////////// The pointToLayer Function //////////
/*
// example basic syntax for adding functionality to a marker
L.geoJson(data, {
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng);
   }
});
*/
/*
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.city + "</h2>")
  }

}).addTo(map);
*/
/*
// display the city, state, and the name of the airport with night navigation backgroung 
// title layer with "navigation-preview-night-v4"
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "navigation-preview-night-v4",
  accessToken: API_KEY
}).addTo(map);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.city + ", " + feature.properties.state + "</h2><hr> <h3>Airport: " + feature.properties.name + "</h3>")
  }
}).addTo(map);

*/
//////////////// The onEachFeature Function ////////////
// disply the airport code and the airport name 
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr> <h3>Airport: " + feature.properties.name + "</h3>");
   }
}).addTo(map);