/* A demonstration of Parent/Child communication in Vue.js.  In this case the
   way in which 'props' is used to allow the parent to communicate with the
   child.
*/

Vue.component("child", {
  template: "#child",
  props: ["message"]
});

var app = new Vue({
  el: "#app",
  data: {
    parentMessage: ""
  },
  methods: {
    updateParent: function() {
      this.parentMessage = this.$refs.parent.value;
      this.$refs.parent.value = "";
    }
  }
});
