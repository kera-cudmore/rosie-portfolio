// Map from Leaflet.js
// https://leafletjs.com/examples/quick-start/

var map = L.map('map').setView([40.785, -73.96], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([40.7, -73.96]).addTo(map);
var marker = L.marker([41.0, -73.87]).addTo(map);
var marker = L.marker([40.7, -73.94]).addTo(map);
