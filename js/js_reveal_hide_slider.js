/* Author: Richard Myatt
   Date: 19 October 2017

   This example is based on a youtube video by Adam Kouri
*/


// Routine which expands a page element
function expand(element) {
  var target = document.getElementById(element);
  var h      = target.offsetHeight;
  var sh     = target.scrollHeight;
  var timerLoop = setInterval(grow, 10);

  function grow() {
    if(h < sh){
      h += 5;
      target.style.height = h + 'px';
    } else {
      clearInterval(timerLoop);
    }
  }

  // Apparently the next line should prevent the link activating
  // in a normal way.  There does not appear to be any difference
  // in the way the page works with or without the line so I left
  // it in as a reminder
  return false;
}

// A routine which retracts or shrinks a page element
function retract(element) {
  var target = document.getElementById(element);
  var h      = target.offsetHeight;
  var timerLoop = setInterval(shrink, 10);

  function shrink() {
    if(h > 0){
      h -= 5;
      target.style.height = h + 'px';
    } else {
      target.style.height = '0px';
      clearInterval(timerLoop);
    }
  }

  // Apparently the next line should prevent the link activating
  // in a normal way.  There does not appear to be any difference
  // in the way the page works with or without the line so I left
  // it in as a reminder
  return false;
}
