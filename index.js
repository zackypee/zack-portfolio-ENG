const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const barIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
  barIcon.classList.toggle('hide-icon');
  closeIcon.classList.toggle('hide-icon');
});
