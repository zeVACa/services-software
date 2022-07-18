// phone button

let closePopupButtons = document.querySelectorAll('.icon-close');
let callBackPopup = document.querySelector('.popup-call-back');
let feedbackPopup = document.querySelector('.popup-feedback');
let phoneButtons = document.querySelectorAll('.icon-phone');
let messageButtons = document.querySelectorAll('.icon-message');

let burgerButtons = document.querySelectorAll('.icon-burger');
let sidebar = document.querySelector('.sidebar');

let disableScroll = () => {
  document.body.classList.add('disable-scroll');
};

let enableScroll = () => {
  document.body.classList.remove('disable-scroll');
};

closePopupButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    feedbackPopup.style.display = 'none';
    callBackPopup.style.display = 'none';

    if (window.innerWidth <= 1420) {
      sidebar.style.display = 'none';
      sidebar.style.position = 'fixed';
    }

    enableScroll();

    let pageBackground = document.querySelector('.page');
    e.preventDefault();
  });
});

phoneButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    callBackPopup.style.display = 'block';
    document.body.classList.add('disable-scroll');
    disableScroll();
  });
});

messageButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    feedbackPopup.style.display = 'block';
    disableScroll();
  });
});

burgerButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    sidebar.style.display = 'flex';
    disableScroll();
  });
});

let popupCallbackBackground = document.querySelector('.popup-call-back');

popupCallbackBackground.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-call-back')) {
    callBackPopup.style.display = 'none';
    enableScroll();
  }
});

let popupFeedbackBackground = document.querySelector('.popup-feedback');

popupFeedbackBackground.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-feedback')) {
    feedbackPopup.style.display = 'none';
    enableScroll();
  }
});
