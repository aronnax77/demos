/* This example is based on code presented in
   https://vuetiful.wordpress.com/2017/03/03/in-depth-child-parent-communication-with-custom-events/
   and modified and anotated by me to help me understand Parent Child
   communication in Vue.js
*/

Vue.component("message-comp", {// this name can now be used as a tag in the html
  template: "#message-component", // reference to the template in the html file
  data: function() {  // function must be used in component
    return {
      message: ""
    };
  },
  // this method is triggered by the click event in the component
  methods: {
    sendMessage: function() {
      // this code raises a custom event 'send-event' together with an argument
      // this event and the argument can now be captured in the parent element
      this.$emit("send-event", this.message);
      // return state of message and clear the input box via two way binding
      this.message = "";
    }
  }
});


new Vue({
  el: "#app",
  data: {
    // this is the data output to 'Child says:' in the html
    messageFromParent: ""
  },
  methods: {
    // this function takes the argument provided by the child component
    updateMessage: function(arg){
      this.messageFromParent = arg;
    }
  }
});
