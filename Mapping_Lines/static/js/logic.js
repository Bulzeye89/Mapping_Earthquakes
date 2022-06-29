// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with options
let map = L.map('mapid').setView([37.0902, -95.7129], 5);

//Coordinates for each point to be used in the polyline
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];


//Create a polyline using the line coordinates and make the line red
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: "4, 10"
  

  
}).addTo(map);


//Create the tile layer that will be the background of the map w/ Leaflet documentation style

//https://docs.mapbox.com/help/glossary/static-tiles-api/

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  //id: "mapbox/streets-v11", //Mapbox Streets
  //id: "mapbox/outdoors-v11", //Mapbox Outdoors
  id: "mapbox/light-v10", //Mapbox Light
  //id: "mapbox/dark-v10", //Mapbox Dark
  //id: "mapbox/satellite-v9", //Mapbox Satellite
  // id: "mapbox/satellite-streets-v11", //Mapbox Satellite Streets
  //id: "mapbox/navigation-day-v1", //Mapbox Navigation Day
  // id: "mapbox/navigation-night-v1", //Mapbox Navigation Night
  accessToken: API_KEY
}).addTo(map);


