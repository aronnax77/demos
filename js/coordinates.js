/*            Author: Richard Myatt
              Date: 25 October 2018

              Exploring the way in which the mouse can be tracked.
*/

// declare variable for mouse position within the container
var xScreenPos;
var yScreenPos;

// get a reference to the container and the display
var el1 = document.querySelector(".container");
var el2 = document.querySelector("#display");

// function to find and display the coordinates of the mouse as it is moved
// over the container
function findCoordinates(e) {

  // screen coordinates of mouse
  var x = e.clientX;
  var y = e.clientY;

  // get details of the container
  var rect = el1.getBoundingClientRect();

  // calculate and display the coordinates
  var out = "Coordinates: (" + (x - rect.x) + "," + (y - rect.y) + ")";
  el2.innerHTML = out;
}

// function to cancel the display if the mouse is moved away from the
// container
function cancelDisplay(e) {
  el2.innerHTML = "Coordinates: (" + " , " + ")";
}

// add event listeners
el1.addEventListener("mousemove", findCoordinates);
el1.addEventListener("mouseout", cancelDisplay);
