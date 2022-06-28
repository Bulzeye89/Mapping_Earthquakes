// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with options
let map = L.map('mapid').setView([40.7, -94.5], 4);

//Alternatively we could create map object with a center and zoom level as seen below
//Useful for when adding multiple til layers or background images
// let map = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
// });


//Get data from cities.js
let cityData = cities;

  //Loop through the cities array and create one marker for each city.
  cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: 'orange',
        lineweight: 4
    })
    .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " +city.population.toLocaleString() + "</h3>")
    .addTo(map);
  });



//Create the tile layer that will be the background of the map w/ Leaflet documentation style
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Alternatively do the same as bove but with mapbox style documentation
//https://docs.mapbox.com/help/glossary/static-tiles-api/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


