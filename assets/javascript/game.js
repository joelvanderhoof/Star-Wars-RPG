//Declare variables

//Create characters as objects

var characters = {
		//Attributes must differ for all opponents
		//Attributes should be distributed so that each character can defeat all other characters by picking them in the right order
		//HP cannot be recovered
		//Counter attack power does not increase
	luke: {
		name: "Luke Skywalker",
		hp: 100;
		attackPower: ; //attack power should increase by the base each time attack is clicked
		counterAttack: ;
	},
	obiWan: {
			name: "Obi Wan Kenobi",
		hp: 120;
		attackPower: ;
		counterAttack: ;
	},
	darthMaul: {
			name: "Darth Maul",
		hp: 100;
		attackPower: ;
		counterAttack: ;
	},
	darthSidious: {
			name: "Darth Sidious",
		hp: 150;
		attackPower: ;
		counterAttack: ;
	}
};

//Declare functions

//Display message to pick character

//Pick a character
//Cannot pick another charachter until next game
//Character is chosen when user clicks on the fighter's picture
function pickCharacter () {

}

//Pick a character to fight
	//Character is chosen when user clicks on the fighter's picture


	//Fighter is moved to "Defender" area


	//Attack button is enabled


//If user loses 
	//Show Game over


	//Show message: press any key to play a new game


//Attack button on click
//Write function to calculate and update these things each time the attack button is clicked
	//Defender's health is reduced by player's current attack power

		//Defender's hp are displayed at the bottom of picture

	//Player's attack power is increased by its base

	//Opponent automatically counter attacks

		//Player's hp is reduced by the ammount of the counter attack

		//HP are shown at the bottom of the player's picture

	//Player is prompted to hit the attack button again


	//If player's hp = 0
		//Display "Game Over"


		//Prompt user to play again


	//If user wins/fighter's hp = 0
		//Move fighter to an area of the screen for defeated opponents


		//Player can now choose a new opponent


		//Show message: select next opponent


	//If user defeats all opponents
		//Show message: You win! Press any key to play a new game.

			//Reset character attributes when a key is pressed

