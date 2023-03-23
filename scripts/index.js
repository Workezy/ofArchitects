let arrowNext = document.querySelector(".arrow_next");
let arrowPrev = document.querySelector(".arrow_prev");
let header_rightbox = document.querySelector(".header_rightbox");
let now_slide = document.querySelector(".now_slide");
let blurAdd = [
    {filter: 'blur(0)'},
    {filter: 'blur(5px)'},
];
let blurTiming = {
    duration: 500,
    iterations: 1,
}



arrowNext.addEventListener("click", nextSlides);
arrowPrev.addEventListener("click", prevSlides);

function nextSlides() {
  if (now_slide.textContent == 01) {
    header_rightbox.style.backgroundImage = 'url("../img/header_img.png")';
    header_rightbox.animate(blurAdd, blurTiming);
    now_slide.textContent = "02";
  } else {
    header_rightbox.style.backgroundImage = 'url("../img/header_img.png")';
    header_rightbox.animate(blurAdd, blurTiming);
    now_slide.textContent = "01";
  }
}
function prevSlides() {
  if (now_slide.textContent == 01) {
    header_rightbox.style.backgroundImage = 'url("../img/header_img.png")';
    header_rightbox.animate(blurAdd, blurTiming);
    now_slide.textContent = "02";
  } else {
    header_rightbox.style.backgroundImage = 'url("../img/header_img.png")';
    header_rightbox.animate(blurAdd, blurTiming);
    now_slide.textContent = "01";
  }
}
