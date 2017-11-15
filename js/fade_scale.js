/* example taken from a video tutorial by Kirupa Chinnathambi see -
https://www.youtube.com/watch?v=bVGOLr3JHbg
The cubic bezier function was obtained by the presenter from cubicbezier.com.
Original code modified and extended.
*/

var textElement = document.querySelector(".animatedText");
var button       = document.querySelector("button");

button.addEventListener('click', action);

function action() {
  window.location.reload();
}
