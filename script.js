/*
  This is javascript made only for your client.
  Don't poke around here because it's not interacting with any database.
  So have fun because you aren't going to make any sort of sql injection.

  Idiot.
*/


// make the arrow appear when hovering over link
function showArrow() {
  const arrowElement = document.getElementById('arrowNavBar');
  arrowElement.style.opacity = '100%';
  arrowElement.className = 'fadeIn'
}

function hideArrow() {
  const arrowElement = document.getElementById('arrowNavBar');
  arrowElement.style.opacity = '0%';
  arrowElement.className = 'fadeOut'
}