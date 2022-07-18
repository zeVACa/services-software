// phone button

let closePopupButtons = document.querySelectorAll('.icon-close');
let callBackPopup = document.querySelector('.popup-call-back');
let feedbackPopup = document.querySelector('.popup-feedback');
let phoneButtons = document.querySelectorAll('.icon-phone');
let messageButtons = document.querySelectorAll('.icon-message');

let burgerButtons = document.querySelectorAll('.icon-burger');
let sidebar = document.querySelector('.sidebar');

closePopupButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    feedbackPopup.style.display = 'none';
    callBackPopup.style.display = 'none';

    if (window.innerWidth <= 1420) {
      sidebar.style.display = 'none';
      sidebar.style.position = 'fixed';
    }

    let pageBackground = document.querySelector('.page');
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

burgerButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    sidebar.style.display = 'block';
  });
});

let popupCallbackBackground = document.querySelector('.popup-call-back');

popupCallbackBackground.addEventListener('click', (e) => {
  console.log('Клик по области попапа');
});

// window.onclick = (e) => {
//   if (e.trarget = )
// };
