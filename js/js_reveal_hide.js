/* Author: Richard Myatt
   Date: 18 October 2017

   Code activated by info button/link designed to show and hide a panel
   previously hidden through the use of 'display: none;'
   together with a reference to this script.
*/

// Set initial state of the panel
var infoVisible = false;

/* This function is activated by an onclick event on the info icon setting the
   state of the display to true or false and the visibility of the panel through
   the 'display' attribute */
function togglePanel(el) {
  var elem = document.getElementById(el);
  if(infoVisible) {
    elem.style.display = 'none';
    infoVisible = false;
  } else {
    elem.style.display = 'block';
    infoVisible = true;
  }
}
