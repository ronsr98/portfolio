// Toggle the mobile menu open/closed by adding/removing the "open" class
// on the navbar. (Per the guidelines, this JS part is optional — you could
// also add/remove the "open" class manually in the HTML to test it.)
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// Close the menu after clicking a link (nice on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('open'));
});
