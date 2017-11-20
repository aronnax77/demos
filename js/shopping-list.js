/* This is an exercise in the MDN JavaScript tutorial and demonstrates how
JavaScript can be used to manipulate the DOM to provide a responsive web page.
See - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
This particular example could be used for any sort of list including a TO DO
list.
*/

var ulEl     = document.querySelector('ul');
var inputEl  = document.querySelector('input');
var buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', addItem);

function addItem() {
  var item = inputEl.value;
  inputEl.value = '';
  var listItem = document.createElement('li');
  var spanItem = document.createElement('span');
  var buttonItem = document.createElement('button');
  listItem.appendChild(spanItem);
  listItem.appendChild(buttonItem);
  spanItem.textContent = item;
  buttonItem.textContent = 'Delete';
  ulEl.appendChild(listItem);

  buttonItem.onclick = function(e) {
    ulEl.removeChild(listItem);
  };

  inputEl.focus();
}
