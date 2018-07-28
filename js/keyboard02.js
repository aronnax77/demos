/*       Author: Richard Myatt
         Date: 28 July 2018
*/

// get a reference to each of the elements
var elemW = document.querySelector(".w-key");
var elemA = document.querySelector(".a-key");
var elemS = document.querySelector(".s-key");

// set background colour to white in each case
elemW.style.backgroundColor = "#fff";
elemA.style.backgroundColor = "#fff";
elemS.style.backgroundColor = "#fff";

// use keydown event handles
document.addEventListener("keydown", function(event) {
  switch(event.key) {
    case "w" || "W":
      elemW.style.backgroundColor = "lightgreen";
      break;
    case "a" || "A":
      elemA.style.backgroundColor = "lightgreen";
      break;
    case "s" || "S":
      elemS.style.backgroundColor = "lightgreen";
      break;
  }
});

document.addEventListener("keyup", function(event) {
  switch(event.key) {
    case "w" || "W":
      elemW.style.backgroundColor = "#fff";
      break;
    case "a" || "A":
      elemA.style.backgroundColor = "#fff";
      break;
    case "s" || "S":
      elemS.style.backgroundColor = "#fff";
      break;
  }
});
