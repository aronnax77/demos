/*   Understanding how the checkbox can be used with JavaScript.  Based on an
     example by W3Schools.
*/

var para = document.querySelector('p');
var chbox = document.querySelector('#myCheck');

function check() {
  chbox.checked = true;
  para.textContent = "";
}

function uncheck() {
  chbox.checked = false;
  para.textContent = "";
}

function test() {
  para.style.display = "inline";
  if(chbox.checked === true) {
    para.textContent = "The checkbox is checked.";
    para.style.backgroundColor = "lightgreen";
  } else {
    para.textContent = "The checkbox is not checked.";
    para.style.backgroundColor = "pink";
  }
}

function change() {
  para.textContent = "";
}
