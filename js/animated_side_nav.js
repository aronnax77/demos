/* This is an example taken from W3Schools with modifications, see
   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
*/

var elCloseBtn = document.querySelector('.closebtn');
var elNav  = document.querySelector('.sidenav');
var elSpan = document.querySelector('span');
elCloseBtn.addEventListener('click', closeNav);
elSpan.addEventListener('click', openNav);

function openNav() {
  elNav.style.width = "250px";
}

function closeNav() {
  elNav.style.width = "0";
}
