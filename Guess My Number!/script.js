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
const number = Math.trunc(Math.random()* 20)+ 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function(){
    /*
    Store the value into guess variable to
    */
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    if (!guess){ //Boolean Expresseion
        // Exception error when input if false
        document.querySelector('.message').textContent = '⛔ No number!';
    }
})