// link scroll

const upButton = document.querySelector(".up-button");

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add("up-button--shown");
  } else {
    upButton.classList.remove("up-button--shown");
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};
