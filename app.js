const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const btnMenu = document.querySelector(".header__toggle");
const btnHamburger = document.querySelector(".btn__hamburger");
const btnClose = document.querySelector(".btn__close");
const mobileMenu = document.querySelector(".mobile__menu");

btnMenu.addEventListener("click", () => {
  console.log("click");
  if (mobileMenu.classList.contains("hide")) {
    body.classList.add("noscroll");
    btnHamburger.classList.add("hide");
    overlay.classList.remove("hide");
    btnClose.classList.remove("hide");
    mobileMenu.classList.remove("hide");
  } else {
    body.classList.remove("noscroll");
    btnHamburger.classList.remove("hide");
    overlay.classList.add("hide");
    btnClose.classList.add("hide");
    mobileMenu.classList.add("hide");
  }
});
