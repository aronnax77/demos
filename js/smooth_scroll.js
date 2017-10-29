/* Example taken from a video by Adam Kouri */

// global variables
var scrollY = 0;
var distance = 40;
var speed = 24;

// function to scroll downward to element
function autoScrollTo(elem) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(elem).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;

  var animator = setTimeout('autoScrollTo(\''+elem+'\')', speed);
  if(yPos > bodyHeight) {
    clearTimeout(animator);
  } else {
    if(currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    } else {
      clearTimeout(animator);
    }
  }
}

// function to scroll up to the top of the page
function resetScroller(elem) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(elem).offsetTop;

  var animator = setTimeout('resetScroller(\''+elem+'\')', speed);
  if(currentY > targetY) {
    scrollY = currentY - distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(animator);
  }
}
