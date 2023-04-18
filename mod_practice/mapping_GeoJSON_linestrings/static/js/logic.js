// Create a light street tile layer that will be the background of our map and add it.
// this first two lines provid the source for the code to call the kind of background needed like "dark-v10" or sny other of ther basic ones 
var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "navigation-preview-day-v4",
  accessToken: API_KEY
});

// Create a dark street tile layer that will be the background of our map and add it.
// this first two lines provid the source for the code to call the kind of background needed like "dark-v10" or sny other of ther basic ones 
var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "navigation-preview-night-v4",
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Day_Navigation: light,
  Night_Navigation: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/KimberlyW618/Mapping_Earthquakes/main/mapping_GeoJSON_linestrings/static/dataJSON/torontoRoutes.json";
/*
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
*/

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// the above with popup onEachFeature data 
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// disply the airport code and the airport name 
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2><hr> <h3>Destination: " + feature.properties.dst + "</h3>");
     }
  }).addTo(map);
});
