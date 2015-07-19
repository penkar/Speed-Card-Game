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

$('#reset').on('click', function() {
  $(document).trigger('resetGame');
  $('.red, .playLeft, .playRight, .lowerDeck, .drawRight').off();
});

$('.drawRight').on('click', function() {
  $(document).trigger('noMoves');
});

$('#start').on('click', function(){
  $(document).trigger('newGame', $('select option:selected').text());

  $('.red').not('.lowerDeck').on('click', function(e) {
    e.preventDefault();
    playObject.hand = 'lowerHand';
    var card = $(this).attr('class');
    playObject.cardIndex = parseInt(card.slice(-1));
    playObject.playCard = 'playLeft'
    $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.red').not('.lowerDeck').on('contextmenu', function (e) {
    e.preventDefault();
    playObject.hand = 'lowerHand';
    var card = $(this).attr('class');
    playObject.cardIndex = parseInt(card.slice(-1));
    playObject.playCard = 'playRight'
    $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.playLeft, .playRight').on('click', function() {
    playObject.playCard = $(this).attr('class').split(' ')[1];
    $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.lowerDeck').on('click', function() {
    $(document).trigger('lowerDraw');
  });
});