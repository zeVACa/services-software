let closePopupBtn = document.querySelector('.close-popup-button');
let callBackPopup = document.querySelector('.popup-call-back');
let phoneButtons = document.querySelectorAll('.icon-phone');

console.log('phoneButtons', phoneButtons);

closePopupBtn.addEventListener('click', (e) => {
  callBackPopup.style.display = 'none';
});

phoneButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    callBackPopup.style.display = 'block';
  });
});

// phoneButtons.addEventListener('click', (e) => {
//   callBackPopup.style.display = 'block';
// });
