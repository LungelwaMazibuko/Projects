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
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); // Main ingredient
    console.log(otherIngredients); // Other ingredients
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

// restaurant.numGuests = 0; // Number of guests
const guests = restaurant.numGuests || 10; // Default value if numGuests is falsy
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestCorrrect = restaurant.numGuests ?? 10;
console.log(guestCorrrect); // 10

// // Short Circuiting (&& and ||)
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas'); // 'Jonas'
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // Ternary operator to set default value
// console.log(guests1); // 10

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2); // 23

// console.log('--- AND ---'); // AND operator
// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // 'Jonas'

// console.log('Hello' && 23 && null && 'Jonas'); // null
// console.log('Hello' && 23 && 'Jonas'); // 'Jonas'

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Spinach'); // Call orderPizza function with ingredients
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach'); // Call orderPizza function with ingredients

// // SPREAD OPERATOR
// const arr = [1, 2, ...[3, 4]];

// //REST OPERATOR
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // Rest operator to collect remaining elements into an array
// console.log(a, b, others); // 1 2 (3) [3, 4, 5]

// const [pizzz, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; // Spread operator to combine two arrays
// console.log(pizzz, risotto, otherFood); // Pizza Risotto (5) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours; // Rest operator to collect remaining properties into an object
// console.log(weekdays); // {thu: {…}, fri: {…}}

// // Functions
// const add = function (...numbers) {
//   let sum = 0; // Initialize sum variable
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; // Add each number to sum
//     console.log(sum);
//   }
// };
// add(2, 3);
// add(5, 6, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach'); // Call orderPizza function with multiple ingredients
// restaurant.orderPizza('Mushrooms'); // Call orderPizza function with one ingredient
// // bad way to create a new array
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[2], arr[1]]; // Bad way to create a new array
// console.log(badNewArr); // [1, 2, 7, 9, 8]

// // good way to create a new array
// const newArr = [1, 2, ...arr]; // Spread operator to create a new array
// console.log(newArr); // [1, 2, 7, 8, 9]

// const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // Spread operator to create a new array
// console.log(newMenu); // (5) ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']

// //Copying an array
// const mainMenuCopy = [...restaurant.mainMenu]; // Spread operator to create a copy of an array
// console.log(mainMenuCopy); // (4) ['Pizza', 'Pasta', 'Risotto']

// // Join two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // Spread operator to join two arrays
// console.log(menu); // (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// // Iterables: arrays, strings, maps, sets. Not objects
// const str = 'Jonas'; // String
// const letters = [...str, '', 'S.']; // Spread operator to create an array from a string
// console.log(letters); // (6) ['J', 'o', 'n', 'a', 's', '']
// console.log(...str); // J o n a s

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ]; // Prompt user for ingredients
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Call orderPasta function with ingredients
// restaurant.orderPasta(...ingredients); // Call orderPasta function with spread operator

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' }; // Spread operator to create a new object
// conseole.log(newRestaurant); // {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

// const restaurantCopy = { ...restaurant }; // Spread operator to create a copy of an object
// console.log(restaurantCopy); // {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), mainMenu: Array(3), …}

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // Destructuring assignment
// const { name, openingHours, categories } = restaurant; // Destructuring assignment
// console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant; // Destructuring assignment with renaming
// console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant; // Destructuring assignment with default values
// console.log(menu, starters); // [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 }; // Object with properties
// ({ a, b } = obj); // Destructuring assignment to assign values to variables
// console.log(a, b); // 23 7

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours; // Destructuring assignment to get nested values
// console.log(open, close); // 11 23

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
