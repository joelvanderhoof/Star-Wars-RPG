//Declare variables

//Create characters as objects

var characters = {
		//Attributes must differ for all opponents
		//Attributes should be distributed so that each character can defeat all other characters by picking them in the right order
		//HP cannot be recovered
		//Counter attack power does not increase
	"luke": {
		name: "Luke Skywalker",
		hp: 100,
		attackPower: 10, //attack power should increase by the base each time attack is clicked
		counterAttack: 15,
	},
	"obiWan": {
		name: "Obi Wan Kenobi",
		hp: 120,
		attackPower: 12,
		counterAttack: 15,
	},
	"darthMaul": {
		name: "Darth Maul",
		hp: 100,
		attackPower: 14,
		counterAttack: 14,
	},
	"darthSidious": {
		name: "Darth Sidious",
		hp: 150,
		attackPower: 15,
		counterAttack: 20,
	}
};

//Declare functions

//Display message to pick character

//Pick a character
//Cannot pick another character until next game
//Character is chosen when user clicks on the fighter's picture
var currentCharacter = {};
var selectFromEnemies = characters;
var currentOpponent = {};
var defeatedEnemies = [];

function selectCharacter () {
	$(".character").one("click", function() {
		//change the character's class to player
		$(this).addClass("player");
		$(this).removeClass("character");
		var charName = $(this).attr("value")
		currentCharacter = characters[charName];
		//remove player's character from the selectEnemies container variable
		delete selectFromEnemies[charName];
		
		//copy the inner html of the tag with the payer's character's id to a variable
		moveToPlayerCharacter = $(this);
		//append that 
		$("#player-character").append(moveToPlayerCharacter);


		//copy all of the inner html from the tag with the characters id to a variable
		moveToEnemies = $("#characters").html();
		//insert that variable in the inner html of the tag with the enemies id
		$("#enemies").html(moveToEnemies);
		//remove all of the inner html from the tag with the characters id
		$("#characters").remove();
		
	});
}

function selectOpponent () {
	$("#enemies").on("click", function() {
		$(".character").one("click", function() {
		//change the character's class to player
		$(this).addClass("defender");
		$(this).removeClass("character");
		var charName = $(this).attr("value")
		console.log($(this).attr("value"));
		currentOpponent = characters[charName];
		//remove player's character from the selectEnemies container variable
		delete selectFromEnemies[charName];
		
		//copy the inner html of the tag with the payer's character's id to a variable
		moveToDefender = $(this);
		//append that 
		$("#defender").append(moveToDefender);

		});
	});
}

function opponentDefeated () {
	currentOpponent = {};
	$(".defender").addClass("defeated");
	$(".defender").removeClass("defender");
		var moveToDefeated = $(".defeated");
		//append that 
		$("#defeated").append(moveToDefeated);
}

function calculateStats () {
	$("#attack").on("click", function() {
		//reduce opponent hp with each attack
		currentOpponent.hp = currentOpponent.hp - currentCharacter.attackPower;
		//reduce player's hp from counterattack
		currentCharacter.hp = currentCharacter.hp - currentOpponent.counterAttack;
		//increase player's attack power by its base each time the button is clicked
		currentCharacter.attackPower += currentCharacter.attackPower;
		console.log("player: " + currentCharacter.hp);
		console.log("opponent: " + currentOpponent.hp);
		console.log("attack power: " + currentCharacter.attackPower);
		//Fight!!!
		if (currentOpponent.hp <= 0) {
			//if the defender is defeated, move to the defeated section
			alert("Opponent Defeated!!!");
			opponentDefeated();

			//
		} else if (currentCharacter.hp <= 0) {
			alert("Game Over!!!!");
		}
	});
}
$(document).ready(function () {
selectCharacter();
calculateStats();
selectOpponent();


//Pick a character to fight
	//Character is chosen when user clicks on the fighter's picture


	//Fighter is moved from the "Enemies" area to the "Defender" area

	//set the pointer-event to none for the attack button
	//set the pointer-event to all once an enemy is selected to be moved to the defender
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

});