/* An exercise in trying to understand how cookies work.  This one is based on
   details presented in MDN.
*/

document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";

function alertCookieValues() {
  alert(document.cookie);
}
