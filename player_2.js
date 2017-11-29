window.playerTwoObject = {
  hand: 'upperHand',
  cardIndex: null,
  playCard: null
};

var resetPlayerTwoObject = function() {
  window.playerTwoObject = {
    hand: 'upperHand',
    cardIndex: null,
    playCard: null
  }
}

function newGameFunction (e) {
  console.log(e.which);
  switch (e.which) {
    case 37: //left arrow
      window.playerTwoObject.playCard = 'playLeft';
      document.dispatchEvent(window.speedEvents.playAttempt); break;
    case 39: //right arrow
      window.playerTwoObject.playCard = 'playRight';
      document.dispatchEvent(window.speedEvents.playAttempt); break;
    case 65: // a key
      playerTwoObject.cardIndex = 0; break;
    case 83: // s key
      playerTwoObject.cardIndex = 1; break;
    case 68: // d key
      playerTwoObject.cardIndex = 2; break;
    case 70: // f key
      playerTwoObject.cardIndex = 3; break;
    case 71: // g key
      playerTwoObject.cardIndex = 4; break;
    case 38:
      drawCard(upperHand); break;
    case 13:
      document.dispatchEvent(window.speedEvents.noMoves); break;
  }
}

document.addEventListener('newGame', function() {
  if (document.getElementsByName('Difficulty')[0].value == '6') {
    document.addEventListener('keydown', newGameFunction);
  } else {
    document.removeEventListener('keydown', newGameFunction);
  }
});
