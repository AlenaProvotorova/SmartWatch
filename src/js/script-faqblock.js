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
