'use strict';

// Scooping in Practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
function printAge() {
  const output = `You are ${age}, born in ${birthYear}`;
  console.log(output);
}

const firstName = 'Jonas';
calcAge(1991);
console.log(printAge);

// Hoisting and TDZ in Practice
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
