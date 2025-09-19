const container_horzontal_menu = document.querySelector('.nav');
const horzontal_menu = document.querySelector('.nav-list');
const list_items = document.querySelectorAll('.nav-list__item');
const cross = document.querySelector('.header__cross');
const burger_menu = document.querySelector('.header__burger');
const burger_lines = document.querySelectorAll('.header__burger__line');

function toggleBurger() {
  container_horzontal_menu.classList.toggle('active');
  horzontal_menu.classList.toggle('active');
  cross.classList.toggle('active');
  list_items.forEach(item => item.classList.toggle('active'));
  burger_lines.forEach(line => line.classList.toggle('active'));
}

burger_menu.addEventListener('click', toggleBurger);

function removeCross() {
  container_horzontal_menu.classList.remove('active');
  horzontal_menu.classList.remove('active');
  cross.classList.remove('active');
  list_items.forEach(item => item.classList.remove('active'));
  burger_lines.forEach(line => line.classList.remove('active'));
}

cross.addEventListener('click', removeCross);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});