// comment block

const btnRight = document.querySelector(".fa-arrow-right");
const btnLeft = document.querySelector(".fa-arrow-left");
const photoes = document.querySelectorAll(".photo-comment");
const comments = document.querySelectorAll(".testimonial-block__text");
const names = document.querySelectorAll(".testimonial-block__name");

let currentIndex = 0;

function removeClass(array, cl) {
  array.forEach((elem) => elem.classList.remove(cl));
}

btnRight.addEventListener("click", function () {
  if (currentIndex < 2) {
    removeClass(photoes, "photo-comment--active");
    photoes[currentIndex + 1].classList.add("photo-comment--active");

    removeClass(comments, "testimonial-block__text--active");
    comments[currentIndex + 1].classList.add("testimonial-block__text--active");

    removeClass(names, "testimonial-block__name--active");
    names[currentIndex + 1].classList.add("testimonial-block__name--active");

    currentIndex++;
    btnLeft.classList.add("arrow-active");
  }
  if (currentIndex === 2) {
    btnRight.classList.remove("arrow-active");
  }
});

btnLeft.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;

    removeClass(photoes, "photo-comment--active");
    photoes[currentIndex].classList.add("photo-comment--active");

    removeClass(comments, "testimonial-block__text--active");
    comments[currentIndex].classList.add("testimonial-block__text--active");

    removeClass(names, "testimonial-block__name--active");
    names[currentIndex].classList.add("testimonial-block__name--active");

    if (currentIndex === 0) {
      btnLeft.classList.remove("arrow-active");
      btnRight.classList.add("arrow-active");
    }
  }
});
