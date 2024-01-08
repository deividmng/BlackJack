let cards = [];
let hasBlackJack = false;

let sum = 0;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "David",
  chips: 200,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": £" + player.chips;

function getRandonCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

console.log(getRandonCard());

function startGame() {
  isAlive = true;

  let firstCard = getRandonCard();
  let secondCard = getRandonCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  console.log(firstCard);

  renderGame();
}

let message = "";
function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do You Want another card";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackJack = true;
    isAlive = false;
  } else {
    message = "You Lost";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandonCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
