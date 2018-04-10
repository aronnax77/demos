/* Author: Richard Myatt
   Date: 27 March 2018
*/

var bus = new Vue();    // This view instance acts as the events bus

// prepare the header
var compHeader = {
  data: function() {
    return {
      title: "Vue.js Events Bus"
    };
  },
  template: "<h1 v-on:click='changeHeader'>Header: {{ title }}</h1>",
  methods: {
    changeHeader: function() {
      this.title = "Title now changed using events bus";
      // emit event using the event bus and pass the title argument
      bus.$emit("titleChanged", "Title now changed using events bus");
    }
  }
};

var compFooter = {
  data: function() {
    return {
      title: "Vue.js Events Bus"
    };
  },
  template: "<h2>Footer: {{ title }}</h2>",
  created: function() {                   // set up a listener on the events bus
      bus.$on("titleChanged", (data) => {
        this.title = data;
      });
  }
};

new Vue({             // our main vue instance
  el: "#vue-app",
  data: {

  },
  components: {
    "header-app": compHeader,
    "footer-app": compFooter
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.input.value;
      this.$refs.input.value = "";
    }
  }
});
