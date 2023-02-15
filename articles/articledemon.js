const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  
  alert("You scored " + score + " out of 2");
});
