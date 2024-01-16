/**
 * Many array methods in JavaScript are higher-order functions
 */

const numbers = [1, 2, 3, 4, 5];

// Map
const squaredNumbers = numbers.map(function(num) {
  return num * num;
});

// Filter
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

// Reduce
const sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0);
