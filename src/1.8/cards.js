const collapseButton = document.querySelector('.collapse-button');

async function renderCards() {
  let cardsResponse = await fetch('./brands.json');
  let cards = await cardsResponse.json();

  let cardsLimit;

  if (collapseButton.classList.contains('content-is-collapsed')) {
    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      cardsLimit = 6;
    } else if (window.innerWidth >= 1120) {
      cardsLimit = 8;
    }
  } else {
    cardsLimit = cards.length;
  }

  let cardsHolder = '';

  for (let i = 0; i < cardsLimit; i++) {
    cardsHolder += `<div class="brands__card-item"><img src="../../assets/brands/${cards[i].file}"><div class="next-page-button"></div></div>`;
  }

  const cardsArea = document.querySelector('.brands');
  cardsArea.innerHTML = cardsHolder;
}

renderCards();

collapseButton.addEventListener('click', (e) => {
  if (collapseButton.classList.contains('content-is-collapsed')) {
    collapseButton.innerHTML = 'Скрыть';
  } else {
    collapseButton.innerHTML = 'Показать все';
  }
  collapseButton.classList.toggle('content-is-collapsed');
  renderCards();
});
