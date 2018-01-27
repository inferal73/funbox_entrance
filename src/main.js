/* REQUIRE STYLE */
require('./scss/main.scss');
/* END REQUIRE STYLE */

const app = {
  data: {
    cards: [],
  },
  methods: {
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
  },
  init() {
    this.data.cards = [...document.querySelectorAll('.card')].forEach((card) => {
      const cardInput = card.querySelector('input');

      const buyLink = card.querySelector('.js-buy');
      buyLink.input = cardInput;
      buyLink.el = card;

      card.input = cardInput;
      cardInput.el = card;
      cardInput.addEventListener('change', event => this.methods.setCardState(event.currentTarget));
      buyLink.addEventListener('click', event => this.methods.setCardToChecked(event));
    });
  },
};

window.onload = function () {
  app.init();
};
