
// Create for loop that computer opponent will run through in order to play game. Each card will be played agains the left and right play card. Afterwards a draw card will trigger. 
var compMove = function(active){
	var active = true
	var count = upperHand.length
	while(active){
		for(var i; i < upperHand.length; i++){
			attemptMove(upperHand,i,playLeft);
			attemptMove(upperHand,i,playRight);
		} 
		
		if (upperHand.length !== count){
			until(upperHand.count===5 || upperDeck.length===0){
				drawCard()
			}
		}
	}
	setWin()
}

// Paramaters to trigger a win for the computer.
var setWin(){
	if (upperHand.length === 0 && upperDeck.length === 0){
		console.log('The Computer has beaten you.')
	}
	return true
}