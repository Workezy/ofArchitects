let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup__wrapper');
// let popupWrapper = document.querySelector('.popup__wrapper')
let openPopupButtons = document.querySelectorAll('.feedback');
let closePopupButton = document.querySelector('.close-popup');
let popupSubmit = document.querySelector('.popup__submit');
let popupComplete = document.querySelector('.popup__complete');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
  })
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

popupSubmit.addEventListener('click', () => {
  popup.classList.remove('active');
  popupComplete.classList.add('active');
})

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    popupComplete.classList.remove('active');
  }
})

// function openSecondPopup () {
//     popup.classList.remove('active');
//     popupComplete.classList.add('active');
// }
ali