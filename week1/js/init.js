// Initialize the map
const map = new maplibregl.Map({

    container: 'map', // container ID

    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL

    center: [-118.26665525376563, 34.046001231149035], // Starting position [lng, lat]

    zoom: 11.5 // Starting zoom level

});
// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-118.30730304121795, 34.05723829042181])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Halgatteok x Twozone Chicken<br> one of my favorite tteokbokki places'))
    .addTo(map);

new maplibregl.Marker()
    .setLngLat([-118.2966858331079, 34.06828893261544])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Tang Huo Malatang<br> build your own hotpot or stir fry '))
    .addTo(map);
new maplibregl.Marker()
    .setLngLat([-118.2327581530456, 34.06516796880868])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('ChaTraMue<br> best thai tea in town'))
    .addTo(map);
    new maplibregl.Marker()
    .setLngLat([-118.24004195630762, 34.049952372335866])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Marugame Monzo<br> my housemates favorite'))
    .addTo(map);