var mainDeck, upperCounter, lowerCounter;
var lowerDeck, upperDeck, drawLeft, drawRight, playLeft, playRight, lowerHand, upperHand, stats;
var start, end, elapsed, name, drawInd = false, gameOver = false;
//the following are referred to herein as the 'play variables' since they are the ones we will be using to play the game.

//IIFE that makes sure there is a fresh deck when the page loads. This also sets all other play variables to null.
//Card values being at Ace being 1, and continue to to D on a base-14 scale. A = 10, B = Jack, C = Queen, D = King.
function resetDeck() {
  mainDeck = [
    '1 C', '2 C', '3 C', '4 C', '5 C', '6 C', '7 C', '8 C', '9 C', 'A C', 'B C', 'C C', 'D C',
    '1 D', '2 D', '3 D', '4 D', '5 D', '6 D', '7 D', '8 D', '9 D', 'A D', 'B D', 'C D', 'D D',
    '1 H', '2 H', '3 H', '4 H', '5 H', '6 H', '7 H', '8 H', '9 H', 'A H', 'B H', 'C H', 'D H',
    '1 S', '2 S', '3 S', '4 S', '5 S', '6 S', '7 S', '8 S', '9 S', 'A S', 'B S', 'C S', 'D S',
  ];
  upperCounter = null, lowerCounter = null;
  lowerDeck = null, uppperDeck = null;
  lowerHand = null, upperHand = null;
  drawLeft = null, drawRight = null;
  playLeft = null, playRight = null;
};

resetDeck();

document.addEventListener('resetGame', function() {
  resetDeck();
  updateCounters(true);
  shuffleDeck();
  document.getElementById('lowerDeck').text = lowerCounter;
  document.getElementById('upperDeck').text = upperCounter;
})

document.addEventListener('newGame', function() {
  start = Date.now();
  dealCards();
  updateCounters();
  document.getElementById('lowerDeck').text = lowerCounter;
  document.getElementById('upperDeck').text = upperCounter;
})

document.addEventListener('playAttempt', function(e, playObject) {
  let {hand, cardIndex, playCard} = window.playObject;
  attemptPlay(hand, cardIndex, playCard);
});

document.addEventListener('lowerDraw', function () {
  drawCard(lowerHand);
  showCard();
});

document.addEventListener('noMoves', function () {
  drawInd = true;
  drawLeftAndRight();
  showCard();
  drawInd = false;
})

document.addEventListener('playMade', function() {
  showCard();
  updateCounters();
  document.getElementById('lowerDeck').text = lowerCounter;
  document.getElementById('upperDeck').text = upperCounter;
  setWin();
})


//Randomly arranges the values in mainDeck to simulate shuffling. Even if this method is called during play, the mainDeck will be empty and it should not affect any other deck.
var shuffleDeck = function() {
  for (var j, x, i = mainDeck.length; i; j = Math.floor(Math.random() * i), x = mainDeck[--i], mainDeck[i] = mainDeck[j], mainDeck[j] = x);
  return mainDeck;
};

//First, it calls the shuffleDeck function to make sure that the cards are not dealt out in sequential order.
//It then deals out cards by removing them from the mainDeck and placing them into the play variables.
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
  showCard()
};

//Takes 3 arguments: the variable name of the hand being playing from (upperHand/lowerHand),
//the index of the card being attempted in that hand, and the card in play being utilized (playLeft/playRight).
//The method parses an integer from the string representing the card, using a base 14 radix. The if clause in the
//conditional makes sure Aces are able to be played on either Kings or Twos; the else if clause makes sure Kings can
//be played on Aces or Queens; and the else clause establishes that all other cards can be played on values either one
//value higher or one value lower than itself. The makePlay method is called when the move is legal, and that method
//takes the same arguments given to attemptMove.
var attemptPlay = function(hand, cardIndex, playCard) {
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
        break;
    }
  } else if (attemptCard == 13) {
    switch (compareCard) {
      case 1:
        makePlay(hand, cardIndex, playCard);
        break;
      case 12:
        makePlay(hand, cardIndex, playCard);
        break;
      default:
        break;
    }
  } else {
    switch (compareCard) {
      case (attemptCard - 1):
        makePlay(hand, cardIndex, playCard);
        break;
      case (attemptCard + 1):
        makePlay(hand, cardIndex, playCard);
        break;
      default:
        break;
    }
  }
};

//This function will always be called from the attemptMove function, and is given those same arguments. This function
//removes the value from the playCard (center card being played on) and replaces it with the value of the player's card.
//The card is then removed from the player's hand.
var makePlay = function(hand, cardIndex, playCard) {
  playCard.splice(0, 1, hand[cardIndex]);
  hand.splice(cardIndex, 1);
  document.dispatchEvent(window.speedEvents.playMade);
  // $(document).trigger('playMade');
};

//This function checks that the player's hand has fewer than five cards in it. If so, it then checks which hand is attempting
//the draw, and makes sure that there is at least one card in the corresponding deck. If all conditions check out, a card
//is spliced from the first index of that player's deck array and pushed into player's hand.
var drawCard = function(hand) {
 if (hand.length < 5) {
    if (hand == lowerHand && lowerDeck.length > 0) {
      hand.push(lowerDeck.splice(0, 1)[0]);
    }
    else if (hand == upperHand && upperDeck.length > 0) {
      hand.push(upperDeck.splice(0, 1)[0]);
    }
    else {
    }
  }
  showCard();
  updateCounters();
};

var drawLeftAndRight = function () {
  if(drawInd){
    updateCounters();
    if (drawLeft === 0) {
      if (upperCounter > lowerCounter) {
        alert("Stalemate. Upper Hand wins by default.");
        alert("...losers.");
      }
      else if (lowerCounter > upperCouter) {
        alert("Stalemate. Player 1 wins by default.");
        alert("But you both suck.");
      }
    }
    else if (drawLeft.length > 0) {
      playLeft.splice(0, 1, drawLeft.splice(0, 1)[0]);
      playRight.splice(0, 1, drawRight.splice(0, 1)[0]);
    }
    drawInd=false;
    updateCounters();
  };
};

var updateCounters = function(reset) {
  if(!reset) {
    upperCounter = upperHand.length + upperDeck.length, lowerCounter = lowerHand.length + lowerDeck.length;
  } else {
    upperCounter = null, lowerCounter = null;
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

var translate = function(card){
  f = card[0], l = card[2];

  if(f==='1'){
    f = 'A'
  } else if (f === 'A'){
    f = "10"
  } else if (f === 'B'){
    f = "J"
  } else if (f === 'C'){
    f = "Q"
  } else if (f === 'D'){
    f = "K"
  }
  if(l==='D'){
    l = '&diams;'
  } else if(l === 'C'){
    l = '&clubs;'
  } else if(l === 'H'){
    l = '&hearts;'
  } else if(l === 'S'){
    l = '&spades;'
  }
  return (f+' '+l)
}

// var a = function(){for(var i = 0; i < 5; i++){$('.uhand div:nth-child(' + i + ')').text('Hello')}}
// updateHandNames(upperHand,uhand)

var updateHandNames = function(hand,handClass){
  var handArray = ['','','','',''];
  for(var i = 0; i < hand.length; i++){
    handArray[i]=(translate(hand[i]));
  }
  handArray;
  for(var j = 0; j < 5; j++){
      var k = j+1
      $('.'+handClass+' div:nth-child( '+k+')').contents().remove();
      $('.'+handClass+' div:nth-child( '+k+')').html(handArray[j]);
  }
}

var showCard=function(){
  updateHandNames(upperHand,'uhand');
  updateHandNames(lowerHand,'dhand');
  updateHandNames([playLeft[0],playRight[0]],'onField');
}

var setWin= function(){
  if (upperHand.length === 0 && upperDeck.length === 0){
    end = Date.now();
    elapsed = (end - start)/1000;
    name = prompt('Player Two has the Upper Hand.\nWinning time: '+elapsed+' seconds.\nEnter name for scoreboard:');
    gameOver=true;
    return true;
  } else if (lowerHand.length === 0 && lowerDeck.length === 0){
    end = Date.now();
    elapsed = (end - start)/1000;
    name = prompt('Player 1 is victorious.\nWinning time: '+elapsed+' seconds.\nEnter name for scoreboard:');
    gameOver=true;
    return true;
  }
}
