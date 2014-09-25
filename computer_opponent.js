
// Create for loop that computer opponent will run through in order to play game. Each card will be played agains the left and right play card. Afterwards a draw card will trigger. 
var compMove = function(active){
	var active = true;
	while(active){
console.log('while loop')
		active = false
	var count = upperHand.length;

		for(var i = 0; i < upperHand.length; i++){
			setTimeout(function(){attemptMove(upperHand,i,playLeft)},2000);
			setTimeout(function(){attemptMove(upperHand,i,playRight)},2000);
			console.log(i)
		} 
		
		if (upperHand.length !== count){
console.log('bye')
			active = true
			do{drawCard(upperHand); count = upperHand.length;}
				while(upperHand.count<5 && upperDeck.length==0);
		}
	}
	setWin();
}

// Paramaters to trigger a win for the computer.
var setWin= function(){
	if (upperHand.length === 0 && upperDeck.length === 0){
		console.log('The Computer has beaten you.');
	}
	return true;
}