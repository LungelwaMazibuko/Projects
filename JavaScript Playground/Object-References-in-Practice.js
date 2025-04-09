'use strict';
// Object References in Practice

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica);
console.log('After:', marriedJessica);
