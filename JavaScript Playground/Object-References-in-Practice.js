'use strict';
// Object References in Practice

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow Copy
const jessicaCopy = { ...jessica }; // Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before:', jessica);
console.log('After:', jessicaCopy);

// Deep Copy/Clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
