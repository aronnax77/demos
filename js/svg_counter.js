/*          Author: Richard Myatt
            Date: 20 September 2018

            An svg counter similar to that used by SL.  Because
            this is written as an svg it can easily be resized.

            Please contrast this counter with those previously
            posted here at:
            https://code.sololearn.com/Wn6r7eQ3kwli/#html and
            https://code.sololearn.com/WsX7DwcDjvdt/#html
*/

// Horizontal counter
var HCounter = {
  template: "#horizontal-counter",
  data: function() {
    return {
      output: "0",
      count: 0
    };
  },
  methods: {
    inc: function(e) {
      e.preventDefault();
      this.count += 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    },
    dec: function(e) {
      e.preventDefault();
      this.count -= 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    }
  }
};

// Vertical counter
var VCounter = {
  template: "#vertical-counter",
  data: function() {
    return {
      output: "0",
      count: 0
    };
  },
  methods: {
    inc: function(e) {
      e.preventDefault();
      this.count += 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    },
    dec: function(e) {
      e.preventDefault();
      this.count -= 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    }
  }
};

new Vue({
  el: "#counter-app",
  components: {
    "horizontal-counter": HCounter,
    "vertical-counter": VCounter
  }
});
