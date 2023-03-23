let mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  slidesPerColumn: 2,
  navigation: {
    nextEl: ".arrow_next",
    prevEl: ".arrow_prev",
  },
});

let btnNext = document.querySelector(".arrow_next");
let btnPrev = document.querySelector(".arrow_prev");
let counter = document.querySelector(".counter p");
btnNext.addEventListener("click", function () {
  if (counter.textContent == "05") {
    return;
  } else {
    let counterReplace = counter.textContent.replace(/0/, "");
    counterReplace++
    counter.textContent = "0" + counterReplace;
  }
  // console.log(counter.innerHTML = '0' + Number(counter)++);
});
btnPrev.addEventListener('click', function() {
  if(counter.textContent == '01') {
    return;
  } else {
    let counterReplace = counter.textContent.replace(/0/, '');
    counterReplace--
    counter.textContent = "0" + counterReplace
  }
})
