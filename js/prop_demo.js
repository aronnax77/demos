/* A demonstration of Parent/Child communication in Vue.js.  In this case the
   way in which 'props' is used to allow the parent to communicate with the
   child.
*/

// component which uses the template in the html
Vue.component("child", {    // name of this component
  template: "#child",       // reference to the template
  props: ["message"]        // props attribute to allow communication between
                            // the parent and the child
});

// main view app
var app = new Vue({
  el: "#app",
  data: {
    parentMessage: ""       // property which holds the message to the child
  },
  methods: {
    // method to set the parentMessage data and cause communication with the child
    updateParent: function() {
      this.parentMessage = this.$refs.parent.value;
      // clear the input field
      this.$refs.parent.value = "";
    }
  }
});
