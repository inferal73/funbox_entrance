/* REQUIRE STYLE */
require('./scss/main.scss');
/* END REQUIRE STYLE */

const app = {
  setCardState(input) {
    const card = input.el;
    if (input.checked) {
      card.classList.add('card-selected');
    } else {
      card.classList.remove('card-selected');
    }
  },
  setCardToChecked(event) {
    event.preventDefault();
    const cardInput = event.currentTarget.input;
    cardInput.checked = true;
    this.setCardState(cardInput);
  },
  selectedHover() {
    const cards = [...document.querySelectorAll('.card')];
    cards.forEach((card) => {
      card.addEventListener('mouseenter', (event) => {
        const currentCard = event.target;
        if (currentCard.classList.contains('card-selected')) {
          currentCard.classList.add('card-selected-hover-style');
        }
      });
      card.addEventListener('mouseleave', (event) => {
        const currentCard = event.target;
        currentCard.classList.remove('card-selected-hover-style');
      });
    });
  },
  init() {
    [...document.querySelectorAll('.card')].forEach((card) => {
      const cardInput = card.querySelector('input');

      const buyLink = card.querySelector('.js-buy');
      buyLink.input = cardInput;
      buyLink.el = card;

      card.input = cardInput;
      cardInput.el = card;
      cardInput.addEventListener('change', event => this.setCardState(event.currentTarget));
      buyLink.addEventListener('click', event => this.setCardToChecked(event));
    });
    this.selectedHover();
  },
};

window.onload = function () {
  app.init();
};
