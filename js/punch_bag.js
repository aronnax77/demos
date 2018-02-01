/* A vue.js demo from a youtube tutorial by The Net Ninja, see
  https://www.youtube.com/watch?v=WjfpQlVem-8&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=13
*/

new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if(this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended  = false;
    }
  },
  computed: {

  }
});
