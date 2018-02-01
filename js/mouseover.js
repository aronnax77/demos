/* Author: Richard Myatt
   Date: 26 January 2018
*/

new Vue({
  el: "#app",
  data: {
    x: 0,
    y: 0
  },
  methods: {
    track: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
