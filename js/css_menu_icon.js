/* Author: Richard Myatt
   Date: 23 October 2017

   This code is taken from w3schools and modified for this demo
   Please see https://www.w3schools.com/howto/howto_css_menu_icon.asp
*/

// function to reveal and hide an element using the w3.css classes
function reveal_hide(elem) {
  var el =document.getElementById(elem);
  if(el.className.indexOf("w3-show") == -1) {
    el.className += " w3-show";
  } else {
    el.className = el.className.replace(" w3-show", "");
  }
}

// function to toggle animation of animated menu
function changer(elem) {
  elem.classList.toggle("change");
}
