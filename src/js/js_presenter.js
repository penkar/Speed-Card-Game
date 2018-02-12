window.playObject = {
    hand: null,
    cardIndex: null,
    playCard: null
  };

var resetPlayObject = function() {
  window.playObject = {
    hand: null,
    cardIndex: null,
    playCard: null
  }
}

let resetElement = document.getElementById('reset');
resetElement.addEventListener('click', function() {
  document.dispatchEvent(window.speedEvents.resetGame);
  $('.red, .playLeft, .playRight, .lowerDeck, .drawRight').off();
})

let drawRightEle = document.getElementsByClassName('drawRight')[0]
, playLeftEle = document.getElementsByClassName('playLeft')[0]
, playRightEle = document.getElementsByClassName('playRight')[0];

drawRightEle.addEventListener('click', function() {
  document.dispatchEvent(window.speedEvents.noMoves);
});

let startElement = document.getElementById('start');

startElement.addEventListener('click', function() {
  document.dispatchEvent(window.speedEvents.newGame);
  let reds = document.getElementsByClassName('red');

  for(var i = 0; i < 5; i++) {
    let card = reds[i];
    card.addEventListener('click', function(e) {console.log(37);
      let position = e.target.className.slice(-1);
      playObject.hand = lowerHand;
      playObject.cardIndex = parseInt(position);
      playObject.playCard = playLeft;

      document.dispatchEvent(window.speedEvents.playAttempt);
      resetPlayObject();
      e.preventDefault();
    });

    card.addEventListener('contextmenu', function(e) {
      playObject.hand = lowerHand;
      let position = e.target.className.slice(-1);
      playObject.cardIndex = parseInt(position);
      playObject.playCard = playRight;

      document.dispatchEvent(window.speedEvents.playAttempt);
      resetPlayObject();
      e.preventDefault();
    })
  }

  function playAction(e) {
    let {target} = e;
    window.playObject.playCard = target.classList[1];
  }

  playRightEle.addEventListener('click', playAction);
  playLeftEle.addEventListener('click', playAction);

  let lowerDeck = document.getElementsByClassName('lowerDeck')[0];
  lowerDeck.addEventListener('click', function() {
    document.dispatchEvent(window.speedEvents.lowerDraw);
  })
});
