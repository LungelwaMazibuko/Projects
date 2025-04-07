'use strict';

/*
NOTE: 
- '.' is a class selector
- '#' is an id selector
*/

// Gaming Logic to restrict the value between 1 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Random number between 1 and 20
let score = 20; // Starting score
let highscore = 0; // Highscore initialized to 0

// Function to update the message displayed on the screen
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for the "Check" button click
document.querySelector('.check').addEventListener('click', function () {
  // Get the user's guess and convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // Log the guess and its type for debugging

  // Case when there's no input (empty input)
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // Case when the player guesses the correct number
  else if (guess === secretNumber) {
    // Update the number displayed on screen to the secret number
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');

    // Change the background color and width of the number
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update the highscore if the current score is higher than the previous highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Case when the guess is wrong (either too high or too low)
  else {
    displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
    score--; // Decrease the score
    document.querySelector('.score').textContent = score;

    // If score reaches 0, end the game
    if (score === 0) {
      displayMessage('💥 You lost the game');
    }
  }
});

// Event listener for the "Again" button click (to reset the game)
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset score to 20
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate a new secret number

  // Update the UI with initial game settings
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // Clear the input field
  document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
  document.querySelector('.number').style.width = '15rem'; // Reset the width of the number box
});
