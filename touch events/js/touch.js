/*                Author: Richard Myatt
                  Date: 7 November 2018

                  A first trial using touch events.  A simple painting app
                  which should also work on a mobile device based partially on
                  https://blog.teamtreehouse.com/building-multi-touch-web-applications
*/



window.onload = function() {

  // get a reference to the noCanvas
  var canvas = document.querySelector("#myCanvas");

  // set the canvas to fill the fullScreen
  canvas.width = window.outerWidth;
  canvas.height = window.outerHeight;

  // get a 2d drawing getContext
  var ctx = canvas.getContext("2d");

  // create a variable to keep track of current touches
  var currentTouches = [];

  // specify constants
  var radiusCircle = 5;
  var isMouseDown = false;


  // return a random colour from an array
  var randomColor = function() {
    var colors = ['#3F3F3F', '#929292', '#00A3EE', '#F5D908', '#D80351'];
    return colors[Math.floor(Math.random() * colors.length + 1)];
  };

    // find the array index of a touch in the currentTouches array
    var findCurrentTouchIndex = function(id) {
      for(var i = 0; i < currentTouches.length; i++) {
        if(currentTouches.id === id) {
          return i;
        }
      }

      // touch not found
      return -1;
    };

    // create a new touch in the currentTouches array and draw the starting point
    // on the screen
    var touchStarted = function(evt) {
      var touches = evt.changedTouches;

      for(var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        var touchColor = randomColor();

        currentTouches.push({
          id: touch.identifier,
          pageX: touch.clientX,
          pageY: touch.clientY,
          color: touchColor
        });

        paintCircle(touch.pageX, touch.pageY, radiusCircle, touchColor);
      }
    };

    // draw a line on the canvas between the previous touch location and the
    // new location
    var touchMoved = function(evt) {
      var touches = evt.changedTouches;

      for(var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        var touchColor = randomColor();

        currentTouches.push({
          id: touch.identifier,
          pageX: touch.clientX,
          pageY: touch.clientY,
          color: touchColor
        });

        paintCircle(touch.pageX, touch.pageY, radiusCircle, touchColor);
      }
    };

    // paint a circle
    var paintCircle = function(cx, cy, r, col) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, Math.PI*2, false);
      ctx.fillStyle = col;
      ctx.fill();
    };

    // set up an event listener for new touches
    canvas.addEventListener("touchstart", function(e) {
      e.preventDefault();
      touchStarted(e);
    });

    canvas.addEventListener("touchmove", function(e) {
      e.preventDefault();
      touchMoved(e);
    });

    canvas.addEventListener("mousedown", function(e) {
      e.preventDefault();
      isMouseDown = true;
      var randCol = randomColor();
      paintCircle(e.clientX, e.clientY, radiusCircle, randCol);
    });

    canvas.addEventListener("mousemove", function(e) {
      e.preventDefault();
      var randCol = randomColor();
      if(isMouseDown) {
        paintCircle(e.clientX, e.clientY, radiusCircle, randCol);
      }
    });

    canvas.addEventListener("mouseup", function() {
      isMouseDown = false;
    });




};
