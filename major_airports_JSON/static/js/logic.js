// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Create the street view tile layer that will be the background of our map and add to the map
// this first two lines provid the source and call for the reg street view 
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/KimberlyW618/Mapping_Earthquakes/main/major_airports_JSON/static/dataJSON/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// disply the airport code and the airport name 
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr> <h3>Airport Name: " + feature.properties.name + "</h3>");
     }
  }).addTo(map);
});
