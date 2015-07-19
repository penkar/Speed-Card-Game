var playerTwoObject = {
  hand: 'upperHand',
  cardIndex: null,
  playCard: null
};

var resetPlayerTwoObject = function() {
  playerTwoObject = {
    hand: 'upperHand',
    cardIndex: null,
    playCard: null
  }
}

$(document).on('newGame', function (e, obj) {
  if (obj == "2 Players") {
    $(document).on('keydown', function (f) {
      switch (f.which) {
        case 37: //left arrow
          // preventDefault();
          playerTwoObject.playCard = 'playLeft';
          $(document).trigger('playAttempt', playerTwoObject);
          break;
        case 39: //right arrow
          // preventDefault();
          playerTwoObject.playCard = 'playRight';
          $(document).trigger('playAttempt', playerTwoObject);
          break;
        case 65: // a
          playerTwoObject.cardIndex = 0
          break;
        case 83: // s
          playerTwoObject.cardIndex = 1
          break;
        case 68: // d
          playerTwoObject.cardIndex = 2
          break;
        case 70:  // f
          playerTwoObject.cardIndex = 3
          break;
        case 71: // g
          playerTwoObject.cardIndex = 4
          break;
        case 38:
          drawCard(upperHand);
          break;
        case 13:
          $(document).trigger('noMoves');
          break;
      }
    });
  }
});