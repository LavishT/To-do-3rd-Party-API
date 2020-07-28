// selecting elements
let locationBtn = document.getElementById("mylocation");
let para = document.getElementById("location");
let button = document.querySelector("button");
let mapLink = document.getElementById("map-link");

mapLink.href = "";
mapLink.textContent = "";
// making a getLocation Function to get the location of the user
function getLocation() {
    if (!navigator.geolocation) {
        para.textContent = "Your browser doesn't support GeoLocation...";
    } else {
        para.textContent = "Locating...";
        navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
    }
}
// function to show the position
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    para.textContent = "";
    mapLink.textContent = "Check out the map!";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = "View The Map!";
}
// Creating an error message if something goes wrong
function errorMsg() {
    para.textContent = "Sorry, something went wrong!";
}

locationBtn.onclick = getLocation;
