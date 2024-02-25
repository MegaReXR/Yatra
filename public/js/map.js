maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
style: maptilersdk.MapStyle.STREETS,
center: [88.3639, 22.5726], // starting position [lng, lat]
zoom: 14, // starting zoom
                        });
