/**
 	In JavaScript, a factory function is a function that returns an object.
	Unlike a constructor function, which is typically used with the new keyword to create instances of objects, a factory function simply creates and returns a new object.
    Factory functions are a form of object creation pattern in JavaScript. 
 */

function createPerson(name, age) {
return {
  name: name,
  age: age,
  greet: function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};
}

const person1 = createPerson('Alice', 25);
const person2 = createPerson('Bob', 30);

console.log(person1.greet()); // Output: Hello, my name is Alice and I am 25 years old.
console.log(person2.greet()); // Output: Hello, my name is Bob and I am 30 years old.

