/* Author: Richard Myatt
   Date: 27 March 2018
*/

new Vue({
  el: "#vue-app",
  data: {
    output: "..."
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.input.value;
      this.$refs.input.value = "";
    }
  }
});
