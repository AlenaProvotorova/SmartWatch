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
    arrowBtns.forEach((elem) =>
      elem.classList.remove("fa-chevron-right--active")
    );
    arrowBtns[i].classList.add("fa-chevron-right--active");

    answers.forEach((elem) => elem.classList.remove("answer--open"));
    answers[i].classList.add("answer--open");

    answerTitles.forEach((elem) =>
      elem.classList.remove("answer-title--active")
    );
    answerTitles[i].classList.add("answer-title--active");
  });
});
