/* Author: Richard Myatt
   Date: 16 March 2018

   A Vue.js tree menu using recursive components with reference to
   https://vuejsdevelopers.com/2017/10/23/vue-js-tree-menu-recursive-components/
   modified and extended for this demo.
*/


var tree = {
  label: 'root',
  nodes: [
    {
      label: 'item1',
      nodes: [
        {
          label: 'item1.1'
        },
        {
          label: 'item1.2',
          nodes: [
            {
              label: 'item1.2.1'
            }
          ]
        }
      ]
    },
    {
      label: 'item2'
    }
  ]
};


Vue.component("tree-menu", {
  props: ["label", "nodes", "depth"],
  template: "#tree-menu",
  data: function() {
    return {
      showChildren: false
    };
  },
  computed: {
    indent: function() {
      return { transform: `translate(${this.depth * 20}px)` };
    }
 },
  methods: {
    handleEvent: function(ev) {
      console.log(ev.target);
      console.log(ev.currentTarget.className);
      console.log(ev.currentTarget.innerHTML);
      console.log(ev.index);
      if(ev.currentTarget.className === "items") {
        alert("The item selected is " + ev.currentTarget.innerText);
      } else if(ev.currentTarget.className === "folders") {
        this.showChildren = !this.showChildren;
      }

    },

  }
});


var main = new Vue({
  el: "#tree",
  data: {
    tree: tree
  }
});
