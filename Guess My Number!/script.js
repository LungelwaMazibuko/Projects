'use strict';
/*
NOTE: '.' is a class selector '#' is a id selector
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉SCorrect Number!';
console.log(document.querySelector('.message').textContent)

Data Testing DOM Manipulation 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

Data Testing Vaules
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/

// Event listener with button configuration
const x = function(){
    console.log
}

/*
Code listens/outputs value stored in the '.check' variable from user input
to console.
'click' implements the code in the function with the arguement '.guess' only
if the event happens
*/

// Gaming Logic to restict the vaule between 1 - 20
let secretNumber = Math.trunc(Math.random() * 20)+ 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    /*
    Store the value into guess variable to
    */
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess){ 
        displayMessage('⛔ No number!');

    // when player wins
    }else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor =' #60b347';
        document.querySelector('.number').style.width ='30rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    //when guess is wrong
    }else if(guess !== secretNumber){
        // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high' : '📉 Too Low';
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score; 
        }else{
            displayMessage('💥 You lost the game');
            document.querySelector('.score').textContent = 0; 
        }
    })
    
    
    // // when guess is too high
    // }else if (guess > secretNumber){
    //     if (score > 1){
    //        document.querySelector('.message').textContent = '📈 Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score; 
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost the game';
    //         document.querySelector('.score').textContent = 0; 
    //     }
        

    // // when guess is too low
    // }else if (guess < secretNumber) {
    //     if (score > 1){
    //         document.querySelector('.message').textContent = '';
    //          score--;
    //          document.querySelector('.score').textContent = score; 
    //      }else{
    //          document.querySelector('.message').textContent = '💥 You lost the game';
    //          document.querySelector('.score').textContent = 0; 
    //      }
    // }

    document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20)+ 1;
     displayMessage('Start guessing...');
    document.querySelector('.score').value = score;
    document.querySelector('.score').textContent = 20; 
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor =' #222';
    document.querySelector('.number').style.width ='15rem';
    })

