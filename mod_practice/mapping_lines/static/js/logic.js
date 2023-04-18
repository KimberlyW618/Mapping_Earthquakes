// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// create the tile layer that will be the background of our map.
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(map);

/* // La to SF
// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790]
];
*/
/*
// ^ + Seattle and Salt lake city
// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
*/
// dif rouot sf,jfk,aus,yyz, orlando
let line = [
  [37.6214, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781],
  [28.4240, -81.3099]
];

// Create a polyline using the line coordinates and make the line blue dash line with .5 opace and 4 weight
L.polyline(line, {
  color: "blue",
  dashArray: '4, 9',
  weight: 4,
  opacity: 0.5
}).addTo(map);


