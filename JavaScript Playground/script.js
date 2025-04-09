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

// The this keyword in regular functions
// 'this' keyword in JavaScript
// 1. In global scope, 'this' refers to the global object (window in browsers)
// 2. In a function, 'this' refers to the global object (window in browsers)
// 3. In a method, 'this' refers to the object that calls the method
// 4. In an event, 'this' refers to the element that triggered the event
// 5. In a constructor function, 'this' refers to the new object being created
// 6. In an arrow function, 'this' refers to the lexical scope (the surrounding context)
calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); // undefined

// Regular Functions vs Arrow Functions
const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = self => {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas1.greet();
jonas1.calcAge();

const addExpr1 = function (a, b) {
  return a + b;
};
addExpr1(2, 5);
addExpr1(2, 5, 8, 12);

var addArrow1 = (a, b) => {
  return a + b;
};
addArrow1(2, 5, 8);
