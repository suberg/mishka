'use strict';

var hamburger = document.querySelector('.page-header__button');
var menu = document.querySelectorAll('.page-header__menu');
var modal = document.querySelector('.modal');
var order = document.querySelectorAll('.btn--order, .product__add');

for (var i = 0; i < menu.length; i++) {
  menu[i].classList.remove('page-header__menu--nojs');
}

hamburger.addEventListener('click', function() {
  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.toggle('page-header__menu--visible');
  }
  hamburger.classList.toggle('page-header__button--close');
});

for (var i = 0; i < order.length; i++) {
  order[i].addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.add('modal--show');
  });
}

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    }
  }
});
