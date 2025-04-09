'use strict';

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
