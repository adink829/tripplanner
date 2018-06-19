console.log('hello');
const buildMarker = require('./marker');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYWRpbms4MjkiLCJhIjoiY2ppbTRwdGs1MDBiejNxbzJvaGcybjQ2dCJ9.xqSBwwnMEemPNvTKB-kmxQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const newMarkerDom = document.createElement("div");
// newMarkerDom.style.height = '39px';
// newMarkerDom.style.width = '32px';
// newMarkerDom.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"

const marker = buildMarker('activities', [-74.009151, 40.705086])
marker.addTo(map);

//new mapboxgl.Marker(newMarkerDom).setLngLat([-74.009151, 40.705086]).addTo(map);
