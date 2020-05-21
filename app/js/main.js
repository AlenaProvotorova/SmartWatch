// burger menu

const burgerMenu = document.querySelector(".burger-menu");
const modalMenu = document.querySelector(".modal-menu");
const modalMenuLinks = document.querySelectorAll(".modal-menu__link");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-menu--close");
  modalMenu.classList.toggle("modal-menu--open");

  if (burgerMenu.classList.contains("burger-menu--close")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
});

modalMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    modalMenu.classList.remove("modal-menu--open");
    body.style.overflow = "visible";
    burgerMenu.classList.remove("burger-menu--close");
  });
});
