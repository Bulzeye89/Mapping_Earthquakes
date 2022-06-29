// Add console.log to check to see if our code is working
console.log("working");

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
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//pointToLayer 
// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   //We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
  
//   }
// }).addTo(map);

//onEachFeature

L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
  }
}).addTo(map);




//Create the tile layer that will be the background of the map w/ Leaflet documentation style

//https://docs.mapbox.com/help/glossary/static-tiles-api/

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  // id: "mapbox/streets-v11", //Mapbox Streets
  id: "mapbox/outdoors-v11", //Mapbox Outdoors
  // id: "mapbox/light-v10", //Mapbox Light
  //id: "mapbox/dark-v10", //Mapbox Dark
  //id: "mapbox/satellite-v9", //Mapbox Satellite
  // id: "mapbox/satellite-streets-v11", //Mapbox Satellite Streets
  //id: "mapbox/navigation-day-v1", //Mapbox Navigation Day
  // id: "mapbox/navigation-night-v1", //Mapbox Navigation Night
  accessToken: API_KEY
}).addTo(map);


