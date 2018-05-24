/*   Author: Richard Myatt
     Date: 24 May 2018

     A Vue.js checkbox demo
*/

var chBox = {
  template: "#box",
  data: function() {
    return {
      color: []
    };
  }
};

new Vue({
  el: '#app',
  data: {
    arr: []
  },
  components: {
    "checkbox-comp": chBox
  }
});
