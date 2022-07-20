// phone button

let callBackPopup = document.querySelector('.popup-call-back');
let feedbackPopup = document.querySelector('.popup-feedback');
let phoneButtons = document.querySelectorAll('.icon-phone');
let feedbackButtons = document.querySelectorAll('.icon-message');

let burgerButtons = document.querySelectorAll('.icon-burger');
let sidebar = document.querySelector('.sidebar');

let disableScroll = () => {
  document.body.classList.add('disable-scroll');
};

let enableScroll = () => {
  document.body.classList.remove('disable-scroll');
};

phoneButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    callBackPopup.style.display = 'block';
    disableScroll();
  });
});

// feedback

let feedbackContentWrapper = document.querySelector('.popup-feedback__content-wrapper');
let popupFeedbackBackground = document.querySelector('.popup-feedback');

feedbackButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // feedbackPopup.style.display = 'block';
    // feedbackPopup.style.transform = 'translate(0%)';
    feedbackPopup.style.opacity = '1';
    feedbackPopup.style.zIndex = '100';
    feedbackContentWrapper.style.transform = 'translate(0%)';
    // feedbackPopup.style.zIndex = '100';
    disableScroll();
  });
});

popupFeedbackBackground.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-feedback')) {
    // feedbackPopup.style.display = 'none';
    feedbackPopup.style.opacity = '0';
    feedbackPopup.style.zIndex = '-100';
    feedbackContentWrapper.style.transform = 'translate(120%)';

    enableScroll();
  }
});

// sidebar

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

sidebar.addEventListener('click', (e) => {
  if (e.target.classList.contains('sidebar')) {
    sidebar.style.display = 'none';
    enableScroll();
  }
});

// close buttons

let closePopupButtons = document.querySelectorAll('.icon-close');

closePopupButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // feedbackPopup.style.display = 'none';

    feedbackPopup.style.opacity = '0';
    feedbackPopup.style.zIndex = '-100';
    feedbackContentWrapper.style.transform = 'translate(120%)';

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
