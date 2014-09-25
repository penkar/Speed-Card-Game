var mainDeck, lowerDeck, upperDeck, drawLeft, drawRight, playLeft, playRight;

var resetDeck = (function () {
  mainDeck = [
  '0 C', '1 C', '2 C', '3 C', '4 C', '5 C', '6 C', '7 C', '8 C', '9 C', 'A C', 'B C', 'C C',
  '0 D', '1 D', '2 D', '3 D', '4 D', '5 D', '6 D', '7 D', '8 D', '9 D', 'A D', 'B D', 'C D',
  '0 H', '1 H', '2 H', '3 H', '4 H', '5 H', '6 H', '7 H', '8 H', '9 H', 'A H', 'B H', 'C H',
  '0 S', '1 S', '2 S', '3 S', '4 S', '5 S', '6 S', '7 S', '8 S', '9 S', 'A S', 'B S', 'C S'
  ];

  lowerDeck = null;
  uppperDeck = null;

  drawLeft = null;
  drawRight = null;

  playLeft = null;
  playRight = null;
})();

var shuffleDeck = function(deck) {
  for (var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
  return deck;
};

var dealCards = function(deck) {
  lowerDeck = mainDeck.splice(0, 20);
  upperDeck = mainDeck.splice(0, 20);
  drawLeft = mainDeck.splice(0, 5);
  playLeft = mainDeck.splice(0, 1);
  playRight = mainDeck.splice(0, 1);
  drawRight = mainDeck.splice(0, 5);
};

var attemptMove = function(card1, card2) {

};

var playCard = function(card1, card2) {

};



