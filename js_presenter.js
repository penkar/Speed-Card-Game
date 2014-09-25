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

$('.start').on('click', function(){
  $(document).trigger('newGame');

  $('.red').not('.lowerDeck').on('click', function() {
    playObject.hand = lowerHand;
    var card = $(this).attr('class');
    playObject.cardIndex = card.slice(-1);
    console.log(playObject);
  });

  $('.playLeft, .playRight').on('click', function() {
    playObject.playCard = $(this).attr('class').split(' ')[1];
    console.log(playObject);
    console.log(playObject);
    $(document).trigger('playAttempt', playObject);
    resetPlayObject();
  })
});


