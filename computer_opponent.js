var compDraw = false;
var stopCommand = false;
var difficulty = null;
$(document).on('noMoves', function(){compMove()});
$(document).on('newGame', function (e, obj){
	switch (obj) {
		case '1 Easy':
			difficulty = 3000;
			break;
		case '2 Beginner':
			difficulty = 2500;
			break;
		case '3 Medium':
			difficulty = 2000;
			break;
		case '4 Hard':
			difficulty = 1000;
			break;
		case '5 Advanced':
			difficulty = 500;
			break;
		default:
			difficulty = 2000;
			break;
	}
	compMove();

});

$(document).on('playMade', function() {
	console.log('received');
	stopCommand = true;
	compMove();
})
// Create for loop that computer opponent will run ,through in order to play game. Each card will be played agains the left and right play card. Afterwards a draw card will trigger.
var compMove = function(){
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
	})();
	setTimeout(drawInd = true,8000);
	stopCommand = true;
	setWin();
}
// Paramaters to trigger a win for the computer.
// var setWin= function(){
// 	if (upperHand.length === 0 && upperDeck.length === 0){
// 		console.log('The Computer has beaten you.');
// 	return true;
// 	}
// }