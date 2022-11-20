let slideposition = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalslides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", function () {
    moveToPrevslide();
  });
function upsideSlideposition() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
  slides[slideposition].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
  if (slideposition === totalslides - 1) {
    slideposition = 0;
  } else {
    slideposition++;
  }
  upsideSlideposition();
}

function moveToPrevslide() {
  if (slideposition === 0) {
    slideposition = totalslides - 1;
  } else {
    slideposition--;
  }
  upsideSlideposition();
}
