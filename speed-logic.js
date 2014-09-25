var mainDeck, upperCounter, lowerCounter;

//the following are referred to herein as the 'play variables' since they are the ones we will be using to play the game.
var lowerDeck, upperDeck, drawLeft, drawRight, playLeft, playRight, lowerHand, upperHand, stats;

//IIFE that makes sure there is a fresh deck when the page loads. This also sets all other play variables to null.
var resetDeck = (function () {
  mainDeck = [
  '1 C', '2 C', '3 C', '4 C', '5 C', '6 C', '7 C', '8 C', '9 C', 'A C', 'B C', 'C C', 'D C',
  '1 D', '2 D', '3 D', '4 D', '5 D', '6 D', '7 D', '8 D', '9 D', 'A D', 'B D', 'C D', 'D D',
  '1 H', '2 H', '3 H', '4 H', '5 H', '6 H', '7 H', '8 H', '9 H', 'A H', 'B H', 'C H', 'D H',
  '1 S', '2 S', '3 S', '4 S', '5 S', '6 S', '7 S', '8 S', '9 S', 'A S', 'B S', 'C S', 'D S'
  ];

  upperCounter = null;
  lowerCounter = null;

  lowerDeck = null;
  uppperDeck = null;

  lowerHand = null;
  upperHand = null;

  drawLeft = null;
  drawRight = null;

  playLeft = null;
  playRight = null;
})();

//Randomly arranges the values in mainDeck to simulate shuffling. Even if this method is called during play, the mainDeck will be empty and it should not affect any other deck.
var shuffleDeck = function() {
  for (var j, x, i = mainDeck.length; i; j = Math.floor(Math.random() * i), x = mainDeck[--i], mainDeck[i] = mainDeck[j], mainDeck[j] = x);
  return mainDeck;
};

//First, it calls the shuffleDeck function to make sure that the cards are not dealt out in sequential order. It then deals out cards by removing them from the mainDeck and placing them into the play variables.
var dealCards = function() {
  shuffleDeck();
  lowerDeck = mainDeck.splice(0, 15);
  lowerHand = mainDeck.splice(0, 5);
  upperDeck = mainDeck.splice(0, 15);
  upperHand = mainDeck.splice(0, 5);
  drawLeft = mainDeck.splice(0, 5);
  playLeft = mainDeck.splice(0, 1);
  playRight = mainDeck.splice(0, 1);
  drawRight = mainDeck.splice(0, 5);
  upperCounter = upperDeck.length + upperHand.length;
  lowerCounter = lowerDeck.length + lowerHand.length;
};

var attemptMove = function(hand, cardIndex, playCard) {
  attemptCard = parseInt(hand[cardIndex], 14);
  compareCard = parseInt(playCard[0], 14);

  if (attemptCard == 1) {
    switch (compareCard) {
      case 13:
        makePlay(hand, cardIndex, playCard);
        break;
      case 2:
        makePlay(hand, cardIndex, playCard);
        break;
      default:
        console.log("Invalid Move");
        break;
    }
  }
  else if (attemptCard == 13) {
    switch (compareCard) {
      case 1:
        makePlay(hand, cardIndex, playCard);
        break;
      case 12:
        makePlay(hand, cardIndex, playCard);
        break;
      default:
        console.log("Invalid Move");
        break;
    }
  }
  else {
    switch (compareCard) {
      case (attemptCard - 1):
        makePlay(hand, cardIndex, playCard);
        break;
      case (attemptCard + 1):
        makePlay(hand, cardIndex, playCard);
        break;
      default:
        console.log("Invalid Move");
        break;
    }
  }
};

var makePlay = function(hand, cardIndex, playCard) {
  playCard.splice(0, 1, hand[cardIndex]);
  hand.splice(cardIndex, 1);
};

var drawCard = function(hand) {
 if (hand.length < 5) {
    if (hand == lowerHand && lowerDeck.length > 0) {
      hand.push(lowerDeck.splice(0, 1)[0]);
    }
    else if (hand == upperHand && upperDeck.length > 0) {
      hand.push(upperDeck.splice(0, 1)[0]);
    }
    else {
      console.log("Invalid input.");
    }
  }
  else {
    console.log("Hand size at maximum.");
  }
};

var stats = function() {
    console.log(mainDeck);
    console.log(upperDeck);
    console.log(upperHand);
    console.log(lowerDeck);
    console.log(lowerHand);
    console.log(drawLeft);
    console.log(playLeft);
    console.log(playRight);
    console.log(drawRight);
};
