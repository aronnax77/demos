/* Author: Richard Myatt
   Date: 4 March 2018
   Revised: 19 September 2018

   Radial progress bar revised.
*/

/* Progress bar component */
var RPBar = {
  template: "#radial-progress-bar",
  props: ["offset", "percent"]
};

new Vue({
  el: "#app",
  data: {
    offset: "339.292",
    percent: "0"
  },
  components: {
    "radial-progress-bar": RPBar
  },
  methods: {
    calcOffset: function() {
      this.offset = Math.PI * 2 * 54 *(1 - this.percent/100);
    }
  }
});
