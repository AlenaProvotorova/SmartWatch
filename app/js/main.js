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

// faq block

const questions = document.querySelectorAll(".faq-block__question");
const arrowBtns = document.querySelectorAll(".fa-chevron-right");
const answers = document.querySelectorAll(".answer");
const answerTitles = document.querySelectorAll(".answer-title");

function returnArrow() {
  arrowBtns.forEach((element) => {
    element.classList.remove("fa-chevron-right--active");
  });
}

questions.forEach((element, i) => {
  element.addEventListener("click", function () {
    if (!answerTitles[i].classList.contains("answer-title--active")) {
      arrowBtns.forEach((elem) =>
        elem.classList.remove("fa-chevron-right--active")
      );
      arrowBtns[i].classList.toggle("fa-chevron-right--active");

      answers.forEach((elem) => elem.classList.remove("answer--open"));
      answers[i].classList.add("answer--open");

      answerTitles.forEach((elem) =>
        elem.classList.remove("answer-title--active")
      );
      answerTitles[i].classList.add("answer-title--active");
    } else {
      arrowBtns[i].classList.remove("fa-chevron-right--active");
      answers[i].classList.remove("answer--open");
      answerTitles[i].classList.remove("answer-title--active");
    }
  });
});

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

// video

const videoBtn = document.querySelector(".video-btn");
const video = document.querySelector("video");

videoBtn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    videoBtn.classList.add("video-btn--unactive");
  } else {
    video.pause();
  }
});

video.addEventListener("click", function () {
  if (video.play) {
    videoBtn.classList.remove("video-btn--unactive");
  }

  if (video.paused) {
    videoBtn.classList.add("video-btn--unactive");
  }
});

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
