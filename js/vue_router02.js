/* Author: Richard Myatt
   Date: 18 April 2018

   A second vue-router demo exploring further features of vue-router including
   dynamic route matching and nested child routes.  Please note that although
   this code functions within the code playground the routing itself is not
   displayed in the top bar of the browser.  To see this properly the code will
   need to be run on a machine independently of the playground.

   PLEASE NOTE THAT THE ROUTING ITSELF IS NOT VISIBLE IN THE URL IN
   THE CODE PLAYGROUND BUT WILL SHOW ITSELF IF RUN ON A PC.
*/

alert("PLEASE NOTE THAT THE ROUTING IN THIS DEMO IS NOT VISIBLE IN THE URL IN THE CODE PLAYGROUND BUT WILL SHOW ITSELF IF RUN ON A PC.");

// text for the home page
var homeTxt = "The vue-router library alows a Vue.js application to take advantage of URL route supported content and also provides a way of referencing this content in links.  This demo illustrates basic routing as previously demonstrated in https://code.sololearn.com/WsC9WE9em4c0/#html and extends this with examples of dynamic route matching and nested child routes.  The user 'Bob' can be any user and is an example of a dynamic route.  Various child routes can be added to the user page, here illustrated as default content, profile content, and posts content.";

// components
var Home = {
  template: "#home",
  data: function() {
    return {
      homeContent: homeTxt
    };
  }
};

var About = {
  template: "#about"
};

var User = {
  template: "#user",
};

var DefaultChild = {
  template: "#default-child",
  data: function() {
    return {
      msg: "Default user information provided by the child route"
    };
  }
};

var ProfileChild = {
  template: "#profile-child",
  data: function() {
    return {
      msg: "Profile user information provided by the child route"
    };
  }
};

var PostsChild = {
  template: "#posts-child",
  data: function() {
    return {
      msg: "User posts provided by the child route"
    };
  }
};

// specify the routes here
var routes = [
  { path: "/", component: Home},
  { path: "/about", component: About },
  { path: "/user/:name",
    component: User,
    children: [
      {
        path: "",
        component: DefaultChild
      },
      {
        path: "profile",
        component: ProfileChild
      },
      {
        path: "posts",
        component:PostsChild
      }
    ]
  }
];

// specify the router
var router = new VueRouter({
  routes: routes
});

// instantiate the vue application
new Vue({
  el: "#vue-app",
  router: router,
  components: {
    "home-component": Home
  }
});
