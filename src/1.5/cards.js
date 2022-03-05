// const cardsArea = document.querySelector('.cards-area');

// let cardsHolder = '<h1>hello</h1>';

async function getCards() {
  let cardsResponse = await fetch('./brands.json');
  let cards = await cardsResponse.json();

  let cardsHolder = '';

  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    cardsHolder += `<img src="../../assets/brands/${cards[i].file}">`;
  }

  const cardsArea = document.querySelector('.cards-area');
  cardsArea.innerHTML = cardsHolder;
}

getCards();

// console.log('fetched cards: ', fetchedCards);

// for (let i = 0; i < 9; i++) {
//   cardsHolder += '<h1>hello</h1>';
// }

// cardsArea.innerHTML = cardsHolder;
