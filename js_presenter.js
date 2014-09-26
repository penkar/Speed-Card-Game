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
  console.log('hello')
  $(document).trigger('resetGame');
  $('.red, .playLeft, .playRight, .lowerDeck, .drawRight').off();
});

$('.drawRight').on('click', function() {
  console.log('New play cards.');
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
    console.log(playObject);
    $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.red').not('.lowerDeck').on('contextmenu', function (e) {
    e.preventDefault();
    playObject.hand = 'lowerHand';
    var card = $(this).attr('class');
    playObject.cardIndex = parseInt(card.slice(-1));
    playObject.playCard = 'playRight'
    console.log(playObject);
    $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.playLeft, .playRight').on('click', function() {
    playObject.playCard = $(this).attr('class').split(' ')[1];
    console.log(playObject);
    $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  });

  $('.lowerDeck').on('click', function() {
    console.log('Lower Draw');
    $(document).trigger('lowerDraw');
  });
});




