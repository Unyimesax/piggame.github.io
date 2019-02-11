/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
	STEPS
1. Create the variables in the global scope as you need them
2. Outline what happens when you click on the button, this will guide your thought process
3. make sure you follow the DRY principle, simple create functions and call the functions wherever you need them.
*/



var  dice, activePlayer,roundScore, score, gamePlaying;

	init();

/***********ROLL DICE BUTTON*******************/

//what happens when the roll dice button is clicked.

document.querySelector('.btn-roll').addEventListener('click', function() {

	if (gamePlaying) {

		//1. roll the dice
			dice = Math.floor(Math.random()*6) + 1;

			if (dice !== 1){
				//Add the value of dice rolls

				roundScore += dice;
			}else{
				// call the next player function
		
					nextPlayer();
			}	
		//2.  display the value of the dice in the current score

		document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
		document.querySelector('.dice').style.display = 'block';

		// 3. Display the image of the dice 

		document.querySelector('.dice').src = 'dice-' + dice + '.png';


		//4. what happens when player rolls a 1

		
		

	}
	
})


	/***************HOLD BUTTON**************** */

// What happens when the hold button is clicked
document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying){ 

		// Transfer roundScore points to player score;
			score[activePlayer] += roundScore;
			document.querySelector('#score-' + activePlayer).innerHTML = score[activePlayer];

			
			if (score[activePlayer] >= 100) {
				
			// change player 1 to Winner
				document.getElementById('name-' + activePlayer).textContent = 'Winner !!'
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				document.querySelector('.dice').style.display = 'none';
				gamePlaying = false;
				
			}else{
					//call the next player function
					nextPlayer();

			}
				
				
		}
		
	})


	/***************NEW GAME BUTTON**************** */

document.querySelector('.btn-new').addEventListener('click', function(){
	init();
})





function nextPlayer(){
	// toggle between players
	activePlayer === 0? activePlayer = 1: activePlayer = 0;
	
	//Resetting the roundScore back to 0;
	roundScore = 0;

	//Toggle the active css property between players
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	//reset all roundScore points to 0 
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#current-1').textContent = 0;

}


function init(){
	score = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
	document.querySelector('#score-0').textContent = 0;
	document.querySelector('#score-1').textContent = 0;
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	


	




}