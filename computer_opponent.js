var compDraw = false
$(document).on('noMoves', function(){compMove()});

// Create for loop that computer opponent will run through in order to play game. Each card will be played agains the left and right play card. Afterwards a draw card will trigger. 
var compMove = function(){
	(function(){
		var count = upperHand.length;
			for(var i = 0; i < count; i++){
				(function(j){
					setTimeout(function(){
						attemptPlay(upperHand,j,playRight);
						attemptPlay(upperHand,j,playLeft);
					if (upperHand.length !== 5 || upperDeck.length===0){
						do{drawCard(upperHand); count = upperHand.length;}
						while(upperHand.count<5 && upperDeck.length===0);
						compMove();
					}
				},2000*(1+j));
			})(i);
		};
	})();
	$(document).trigger('outOfMoves');
	setWin();
}
// Paramaters to trigger a win for the computer.
var setWin= function(){
	if (upperHand.length === 0 && upperDeck.length === 0){
		console.log('The Computer has beaten you.');
	}
	return true;
}