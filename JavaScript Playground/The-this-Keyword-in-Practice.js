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
