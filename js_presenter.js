var playObject = {
    hand: null,
    cardIndex: null,
    playCard: null
  };

var resetPlayObject = function() {
  playObject = {
    hand: null,
    cardIndex: null,
    playCard: null
  }
}

// $('#reset').on('click', function() {
// });
let resetElement = document.getElementById('reset');
resetElement.addEventListener('click', function() {
  document.dispatchEvent(window.speedEvents.resetGame);
  $('.red, .playLeft, .playRight, .lowerDeck, .drawRight').off();
})


$('.drawRight').on('click', function() {
  window.dispatchEvent(window.speedEvents.noMoves);
});

let startElement = document.getElementById('start');
startElement.addEventListener('click', function() {
  document.dispatchEvent(window.speedEvents.newGame);

  $('.red').not('.lowerDeck').on('click', function(e) {
    e.preventDefault();
    playObject.hand = 'lowerHand';
    var card = $(this).attr('class');
    playObject.cardIndex = parseInt(card.slice(-1));
    playObject.playCard = 'playLeft';
    window.dispatchEvent(window.speedEvents.playAttempt);
    // $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.red').not('.lowerDeck').on('contextmenu', function (e) {
    e.preventDefault();
    playObject.hand = 'lowerHand';
    var card = $(this).attr('class');
    playObject.cardIndex = parseInt(card.slice(-1));
    playObject.playCard = 'playRight';
    window.dispatchEvent(window.speedEvents.playAttempt);
    // $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.playLeft, .playRight').on('click', function() {
    playObject.playCard = $(this).attr('class').split(' ')[1];
    window.dispatchEvent(window.speedEvents.playAttempt);
    // $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.lowerDeck').on('click', function() {
    window.dispatchEvent(window.speedEvents.lowerDraw);
    // $(document).trigger('lowerDraw');
  });
});
