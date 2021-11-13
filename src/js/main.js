const demo = () => 'Webpack Boilerplate v5.10.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

// eslint-disable-next-line no-console
console.log(demo());
var app = {};
let navBarMenu = document.querySelector(".navbar__menu");
let hamburgerBtn = document.querySelector(".hamburger");
let bars = document.querySelector(".hamburger__open");
let cancel = document.querySelector(".hamburger__close");

function toggleMenu() {
  if (navBarMenu.classList.contains("show")) {
    navBarMenu.classList.remove("show");
    cancel.style.display = "none";
    bars.style.display = "block";
  } else {
    navBarMenu.classList.add("show");
    cancel.style.display = "block";
    bars.style.display = "none";
  }
}

hamburgerBtn.addEventListener("mouseenter", toggleMenu);
navBarMenu.addEventListener("mouseleave", toggleMenu);
