

// declare variables
let mapOptions = {'centerLngLat': [104.1954,35.8617],'startingZoomLevel':5}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: mapOptions.centerLngLat, // Starting position [lng, lat]
    zoom: mapOptions.startingZoomLevel // Starting zoom level
});

function addMarker(data){
    let popup_message;
    let lng = data['lng'];
    let lat = data['lat'];
    if (data['Do you like to go out to eat?'] == "Yes"){
        popup_message = `<h2>Yes/h2> <h3>Location: ${data['Where are you from']}</h3> <p>Zip Code: ${data['What zip code do you live in?']}</p>`
    }
    else{
        popup_message = `<h2>No</h2><p>Zip Code: ${data['Where are you from']}</p>`
    }
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,data['Do you have a favorite food place in LA?']);
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title; 
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat],
        })
    })
    document.getElementById("contents").appendChild(newButton);
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRRajzcHeL4PhlZoepEeW5Q_88vEhNvgpvk_f3xMXwSwD4SU0QfLbzfeQWD6SyKH5uQzc3yqyNZMzV7/pub?output=csv"
// When the map is fully loaded, start adding GeoJSON data
map.on('load', function() {
    // Use PapaParse to fetch and parse the CSV data from a Google Forms spreadsheet URL
    Papa.parse(dataUrl, {
        download: true, // Tells PapaParse to fetch the CSV data from the URL
        header: true, // Assumes the first row of your CSV are column headers
        complete: function(results) {
            // Process the parsed data
            processData(results.data); // Use a new function to handle CSV data
        }
    });
});

function processData(results){
    console.log(results) //for debugging: this can help us see if the results are what we want
    results.forEach(feature => {
        //console.log(feature) // for debugging: are we seeing each feature correctly?
        // assumes your geojson has a "title" and "message" attribute
        // let coordinates = feature.geometry.coordinates;
        let longitude = feature['lng']
        let latitude = feature['lat'];
        let title = feature['Do you have a favorite food place in LA?'];
        let message = feature['Where are you from'];
        addMarker(feature);
    });
};