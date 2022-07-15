// phone button

let closePopupButtons = document.querySelectorAll('.close-popup-button');
let callBackPopup = document.querySelector('.popup-call-back');
let feedbackPopup = document.querySelector('.popup-feedback');
let phoneButtons = document.querySelectorAll('.icon-phone');
let messageButtons = document.querySelectorAll('.icon-message');

closePopupButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    feedbackPopup.style.display = 'none';
    callBackPopup.style.display = 'none';
    e.preventDefault();
  });
});

phoneButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    callBackPopup.style.display = 'block';
  });
});

messageButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    feedbackPopup.style.display = 'block';
  });
});
