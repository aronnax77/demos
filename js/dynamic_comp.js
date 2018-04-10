/* Author: Richard Myatt
   21 March 2018
*/

Vue.component("comp-one", {
  template: "#comp-one",
});

Vue.component("comp-two", {
  template: "#comp-two",
});

new Vue({
  el: "#app",
  data: {
    comp: "comp-one"
  }
});
