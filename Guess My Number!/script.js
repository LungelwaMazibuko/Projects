'use strict';
// '.' is a class selector '#' is a id selector
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉SCorrect Number!';
console.log(document.querySelector('.message').textContent)

// Data Testing DOM Manipulation 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)

