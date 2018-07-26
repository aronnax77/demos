/*       Author: Richard Myatt
         Date: 26 July 2018
*/

// cache the DOM
var keyElem    = document.querySelector("#key");
var codeElem   = document.querySelector("#code");
var statusElem = document.querySelector("#status");


// set up the two event listeners
document.addEventListener("keydown", function(event) {
  keyElem.innerHTML = event.key;
  statusElem.innerHTML  = "key down";
});

document.addEventListener("keyup", function(event) {
  codeElem.innerHTML = (event.which || event.keyCode);
  statusElem.innerHTML  = "key up";
});
