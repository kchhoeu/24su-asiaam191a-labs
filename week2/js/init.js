// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/caec4418-2327-48df-b5a5-fec05b9b02db/style.json?key=MecKKSXvMgXCEPsWUhoz', // Your style URL
    center: [139.75013994516746, 35.6924609005324], // Starting position [lng, lat]
    zoom: 11 // Starting zoom level
});

function addMarker(lat,lng,title,message){
    let popup_message = `<h2>${title}</h2> <h3>${message}</h3>`
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // (1)! 
    newButton.id = "button"+title; // (2)! 
    newButton.innerHTML = title; // (3)! 
    newButton.setAttribute("lat",lat); // (4)! 
    newButton.setAttribute("lng",lng); // (5)! 
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat], //(6)!
        })
    })
    document.getElementById("contents").appendChild(newButton); //(7)! 
}

addMarker(35.725015369739715, 139.84442080859648, "Nishinkoiwa", "Visited the Monchhichi park, saw lots of Monchhichis!s")
addMarker(35.66210766049992, 139.70242125257306, "Shibuya", "Shopped a lot, and explored the city life")
addMarker(35.71554810775602, 139.79733363568027, "Asakusa", "Lot of street food, and visited the Shrine")




