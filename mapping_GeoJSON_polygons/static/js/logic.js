// check to see that things are working 
console.log("working")
// create basic street tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a light street tile layer that will be the background of our map and add it.
// this first two lines provid the source for the code to call the kind of background needed like "dark-v10" or sny other of ther basic ones 
var satelliteStreets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "satellite-streets-v11",
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/KimberlyW618/Mapping_Earthquakes/main/mapping_GeoJSON_polygons/static/dataJSON/torontoNeighborhoods.json";
/*
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
*/

// Create a style for the lines.
let myStyle = {
  color: "blue",
  weight: 1,
  fillColor: "yellow"
}

// the above with popup onEachFeature data 
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// disply the airport code and the airport name 
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
     }
  }).addTo(map);
});
