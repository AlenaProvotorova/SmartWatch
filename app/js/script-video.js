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
