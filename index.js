/* Create new variable called randomNumber1 then set the value of this variable to a random number 
 between 1 and 6. Test it out in the console to make sure it works as expected.
 */ 

// Generate random numbers between 1 and 6 for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // for Player 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // for Player 2

// Select the image elements for both players
var player1Dice = document.querySelector(".img1");
var player2Dice = document.querySelector(".img2");

// Update the image source for player 1 and player 2 dice using setAttribute
player1Dice.setAttribute("src", `./images/dice${randomNumber1}.png`);
player2Dice.setAttribute("src", `./images/dice${randomNumber2}.png`);


var title = document.querySelector("h1");

// Compare the dice numbers and change the title text accordingly
if (randomNumber1 > randomNumber2) {
    title.textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    title.textContent = "Player 2 Wins!";
} else {
    title.textContent = "It's a Draw!";
}


 