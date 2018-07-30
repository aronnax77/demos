/*       Author: Richard Myatt
         Date: 30 July 2018
*/

// cache the DOM
var boxElem = document.querySelector("#snd");
var audioElem = document.querySelector("#horse");

// add event listener
boxElem.addEventListener("click", function() {
  audioElem.play();
});
