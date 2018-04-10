/* Author: Richard Myatt
   20 March 2018
*/


var description = "This is a demonstration of the use of slots in Vue.js.  Above is an h1 element which has been placed in the slot named 'title'.  Below is an h4 element placed in the slot named 'suplement'.";

Vue.component("slots-demo", {
  template: "#slots-demo",
  props: ["text"]
});


new Vue({
  el: "#app",
  data: {
    text: description
  }
});
