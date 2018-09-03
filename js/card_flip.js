/*          Author: Richard Myatt
            Date: 3 September 2018

            A card flip demo based on a tutorial at
            https://3dtransforms.desandro.com/card-flip
*/

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
