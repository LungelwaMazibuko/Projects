'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
    openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); 

const { name, openingHours, categories } = restaurant; // Destructuring assignment
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // Destructuring assignment with renaming
console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant; // Destructuring assignment with default values
console.log(menu, starters); // [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }; // Object with properties
({ a, b } = obj); // Destructuring assignment to assign values to variables
console.log(a, b); // 23 7

// Nested objects
const {
  fri: { open, close },
} = openingHours; // Destructuring assignment to get nested values
console.log(open, close); // 11 23

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // Destructuring assignment
// console.log(x, y, z); // 2 3 4
// console.log(arr); // [2, 3, 4]

// const [main, secondary] = restaurant.categories; // Destructuring assignment
// console.log(main, secondary); // Italian Pizzeria

// const temp = main; // temp variable to swap values
// main = secondary; // swap values
// secondary = temp; // swap values
// console.log(main, secondary); // Pizzeria Italian

// [main, secondary] = [secondary, main]; // Destructuring assignment to swap values
// console.log(main, secondary); // Italian Pizzeria

// Receiving 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0); // Destructuring assignment
// console.log(starter, mainCourse); // Garlic Bread Pizza

// const nested = [2, 4, [5, 6]]; // Nested array
// // const [i, , j] = nested; // Destructuring assignment
// const [i, , [j, k]] = nested; // Destructuring assignment to get nested values
// console.log(i, j, k); // 2 5 6

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9]; // Destructuring assignment
// console.log(p, q, r); // 8 9 1
