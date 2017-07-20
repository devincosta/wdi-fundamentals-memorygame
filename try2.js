//'use strict'
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var flipCard = function (cardId){
if (cardsInPlay.length === 2){
   cardsInPlay[0] === cardsInPlay[1]
   console.log("user flipped" + cards[cardId])
  alert("You found a match!");}
  else {
    alert("Sorry, try again");
  }
 flipCard(0)
 cardsInPlay.push(cards[cardId])
