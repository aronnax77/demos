/* Author: Richard Myatt
   Date: 25 November 2017

This code was inspired by the desire to try and understand what the geolocation
api was, its limitations, and how it can be used.
*/

function isCompatible() {
  var elComp = document.querySelector('.compatible');
  if('geolocation' in navigator) {
    elComp.textContent = 'Compatible: YES';
    //elComp.style.color           = 'yellow';
    //elComp.style.backgroundColor = 'red';
    elComp.style.backgroundColor = 'lightgreen';
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    elComp.textContent = 'Compatible: NO';
    elComp.style.backgroundColor = 'lightred';
  }
}

function showPosition(pos) {
  var lat    = pos.coords.latitude;
  var long   = pos.coords.longitude;
  var coords = lat + ', ' + long;
  renderCoords();

  function renderCoords() {
    var elLat  = document.querySelector('.lat');
    var elLong = document.querySelector('.long');
    elLat.textContent  = 'Latitude: ' + lat;
    elLong.textContent = 'Longitude: ' + long;
  }
}

function showError(error) {
  var elLat  = document.querySelector('.lat');
  elLat.style.color           = 'yellow';
  elLat.style.backgroundColor = 'red';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            elLat.textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            elLat.textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            elLat.textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            elLat.textContent = "An unknown error occurred.";
            break;
    }
}
