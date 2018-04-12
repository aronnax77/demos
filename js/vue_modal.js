/* Author: Richard Myatt
   Date: 12 April 2018

   A Vue.js modal component demo based on https://vuejs.org/v2/examples/modal.html
   and modified for this demo
*/


// register modal component
Vue.component('modal', {
  template: '#modal'
});

// start app
new Vue({
  el: '#modal-demo',
  data: {
    showModal: false
  }
});
