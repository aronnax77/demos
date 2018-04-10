/* Author: Richard Myatt
   Date: 10 March 2018

   This demo shows a classic modal with a background mask.

*/


// Get a reference to the modal
var modal = document.querySelector("#classicModal");

// Get a reference to the button
var btn = document.querySelector("#btn");

// Get a reference to the span element
var span = document.querySelector(".close");

// When the user clicks the button open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks <span> (X), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
};
