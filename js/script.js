"use strict";

var hamburger = document.querySelector(".page-header__button");
var menu = document.querySelector(".page-header__menu");
var modal = document.querySelector(".modal");
var order = document.querySelectorAll("button.btn, .product__add");
console.log(order);

hamburger.addEventListener("click", function() {
  menu.classList.toggle("page-header__menu--visible");
  hamburger.classList.toggle("page-header__button--close");
});

for (var i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function() {
    modal.classList.add("modal--show");
    window.addEventListener("keydown", function(event) {

      if (event.keyCode === 27) {

        if (modal.classList.contains("modal--show")) {
          modal.classList.remove("modal--show");
        }

      }
    });
  });
}
