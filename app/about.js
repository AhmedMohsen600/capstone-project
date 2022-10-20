const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close');
const links = document.querySelectorAll('a');
burger.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

let url = window.location.href;

links.forEach((link) => {
  if (link.href === url) link.id = 'active-link';
});
