/*          Author: Richard Myatt
            Date: 19 September 2018

            Linear progress bar written using Vue.js and an svg.
*/

/* Progress bar component */
var LPBar = {
  template: "#linear-progress-bar",
  props: ["offset", "percent"]
};

new Vue({
  el: "#app",
  data: {
    offset: "400",
    percent: "0"
  },
  components: {
    "linear-progress-bar": LPBar
  },
  methods: {
    calcOffset: function() {
      this.offset = 400 *(1 - this.percent/100);
    }
  }
});
