/* Author: Richard Myatt
  18 October 2017

  Example taken from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
  and modified.
*/

var para;

function loader() {
  para = document.querySelector("p");
  para.addEventListener('click', updateName);
}

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
