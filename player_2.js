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
  console.log(obj);
  if (obj == "2 Players") {
    $(document).on('keydown', function (f) {
      switch (f.which) {
        case 37: //left arrow
          // preventDefault();
          playerTwoObject.playCard = 'playLeft';
          console.log(playerTwoObject);
          $(document).trigger('playAttempt', playerTwoObject);
          break;
        case 39: //right arrow
          // preventDefault();
          playerTwoObject.playCard = 'playRight';
          console.log(playerTwoObject);
          $(document).trigger('playAttempt', playerTwoObject);
          break;
        case 65: // a
          playerTwoObject.cardIndex = 0
          console.log(playerTwoObject);
          break;
        case 83: // s
          playerTwoObject.cardIndex = 1
          console.log(playerTwoObject);
          break;
        case 68: // d
          playerTwoObject.cardIndex = 2
          console.log(playerTwoObject);
          break;
        case 70:  // f
          playerTwoObject.cardIndex = 3
          console.log(playerTwoObject);
          break;
        case 71: // g
          playerTwoObject.cardIndex = 4
          console.log(playerTwoObject);
          break;
        case 38:
          drawCard(upperHand);
          break;
        case 13:
          console.log('draw');
          $(document).trigger('noMoves');
          break;
      }
    });
  }
});