const mapboxgl = require("mapbox-gl");

const iconURLs= {
    hotels: 'http://i.imgur.com/D9574Cu.png',
    restaurants: 'http://i.imgur.com/cqR6pUI.png',
    activities: 'http://i.imgur.com/WbMOfMl.png'
}

const buildMarker = function(type, arrOfCoords){
    const newMarkerDom = document.createElement("div");
    newMarkerDom.style.height = '39px';
    newMarkerDom.style.width = '32px';
    newMarkerDom.style.backgroundImage = iconURLs[type];
    return new mapboxgl.Marker(newMarkerDom).setLngLat(arrOfCoords);
}
console.log(buildMarker);

module.exports = buildMarker;