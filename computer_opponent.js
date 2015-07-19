var compDraw = false;
var stopCommand = false;
var difficulty = null;

$(document).on('newGame', function (e, obj){
	switch (obj) {
		case 'CPU Easy':
			stopCommand = false;
			difficulty = 3000;
			$(document).on('noMoves', function(){compMove()});
			$(document).on('playMade', function() {
				stopCommand = true;
				compMove();
			})
			compMove();
			break;
		case 'CPU Beginner':
			stopCommand = false;
			difficulty = 2500;
			$(document).on('noMoves', function(){compMove()});
			$(document).on('playMade', function() {
				stopCommand = true;
				compMove();
			})
			compMove();
			break;
		case 'CPU Medium':
			stopCommand = false;
			difficulty = 2000;
			$(document).on('noMoves', function(){compMove()});
			$(document).on('playMade', function() {
				stopCommand = true;
				compMove();
			})
			compMove();
			break;
		case 'CPU Hard':
			stopCommand = false;
			difficulty = 1000;
			$(document).on('noMoves', function(){compMove()});
			$(document).on('playMade', function() {
				stopCommand = true;
				compMove();
			})
			compMove();
			break;
		case 'CPU Advanced':
			stopCommand = false;
			difficulty = 500;
			$(document).on('noMoves', function(){compMove()});
			$(document).on('playMade', function() {
				stopCommand = true;
				compMove();
			})
			compMove();
			break;
		case '2 Players':
			stopCommand = true;
		default:
			stopCommand = true;
			break;
	}
});


// Create for loop that computer opponent will run ,through in order to play game. Each card will be played agains the left and right play card. Afterwards a draw card will trigger.
var compMove = function(){
	if(gameOver){return true};
	(function(){
		var count = upperHand.length;
			for(var i = 0; i < count; i++){
				if (stopCommand) {
					stopCommand = false;
					compMove();
					break;
				}
				(function(j){
					setTimeout(function(){
						attemptPlay(upperHand,j,playRight);
						attemptPlay(upperHand,j,playLeft);
					if (upperHand.length !== 5 && upperDeck.length!==0){
						do{drawCard(upperHand); count = upperHand.length;}
						while(upperHand.count<5 && upperDeck.length===0);
						compMove();
					}
				},difficulty*(1+j));
			})(i);
		};
	setWin();
	})();
	setTimeout(drawInd = true,8000);
	stopCommand = true;
}