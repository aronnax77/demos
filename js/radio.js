/*   Author: Richard Myatt
     Date: 24 May 2018

     A Vue.js radio button demo
*/

var radio = {
  template: "#radio",
  props: ["picked"]
};

new Vue({
  el: "#app",
  data: {
    picked: ""
  },
  components: {
    "radio-group": radio
  }
});
