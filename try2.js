//'use strict'
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
// this is the player flipping a card
var flipCard = function (){
cardId = this.getAttribute('data-id');
console.log(cardId);

//adds a car back to the array
cardsInPlay.push(cards[cardId].card);

//shows the card
this.setAttribute('src', cards[cardId].cardImage);

//this will see if the cards have been played
if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
    // Empty cards in play array for next try
    cardsInPlay = [];
  }
};
// Function that will make the
var createBoard = function () {
  // Loop through your cards array to create card elements for your board
  for (var i = 0; i < cards.length; i++) {
    // Create an img element which will be used as a card
    var cardElement = document.createElement('img');

    // Set the src attribute to display the back of card image
    cardElement.setAttribute('src', 'images/back.png');

		// Set the card's 'data-id' attribute to be the index of the current element
    // data- attributes are meant to store data about an element that is not tied to a style.
    cardElement.setAttribute('data-id', i);

		// Add an event listener so that when a card is clicked,
    // the function flipCard will be executed
    cardElement.addEventListener('click', flipCard);

    // Append the card to the board
    document.getElementById('game-board').appendChild(cardElement);

  }

}

// Call the createBoard function to create the board.
createBoard();
