/*              Author: Richard Myatt
                Date: 20 October 2018

                A typewriter demo using a function designed to allow typing into
                multiple paragraphs.
*/

// lines of text for typing
var txt1 = "There was an Old Man with a beard,";
var txt2 = "Who said, “It is just as I feared!—";
var txt3 = "Two Owls and a Hen, four Larks and a Wren,";
var txt4 = "Have all built their nests in my beard!";
var txt5 = "by Edward Lear";

// constants
var tySpeed = 80;    // typing speed
var crSpeed = 250;    // cariage return speed
var i;

// delays between typing the lines
var delay1 = 250;
var delay2 = delay1 + crSpeed + txt1.length*tySpeed;
var delay3 = delay2 + crSpeed + txt2.length*tySpeed;
var delay4 = delay3 + crSpeed + txt3.length*tySpeed ;
var delay5 = delay4 + crSpeed + txt4.length*tySpeed;

// cache the dom
var el1 = document.querySelector("#idTxt1");
var el2 = document.querySelector("#idTxt2");
var el3 = document.querySelector("#idTxt3");
var el4 = document.querySelector("#idTxt4");
var el5 = document.querySelector(".attribution");

// function to type the text
// el     - reference to the element into which to type
// txt    - text to type
// tSpeed - typing speed in milliseconds
// delay  - delay in milliseconds
function typewriter(el, txt, tSpeed, delay) {
  for(var i = 0; i < txt.length; i++) {
    // is this the first character
    if(i === 0) {
      setTimeout(function() {
        el.innerHTML += txt[0];
      }, delay);
    } else {                // all other characters
      typeAt = delay + tSpeed * i;
      // wrap setTimeout function to ensure all delays are set
      function setDelay(count) {
        setTimeout(function() {
          el.innerHTML += txt[count];
        }, typeAt);
      }
      // set the remaining character typing delays
      setDelay(i);
    }
  }
}

typewriter(el1, txt1, tySpeed, delay1);
typewriter(el2, txt2, tySpeed, delay2);
typewriter(el3, txt3, tySpeed, delay3);
typewriter(el4, txt4, tySpeed, delay4);
typewriter(el5, txt5, tySpeed, delay5);
