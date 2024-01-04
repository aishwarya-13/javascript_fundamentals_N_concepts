/**
IIFE gives us the ability to create function and run it at the same time.
We are just executing code on the fly.
 */

//Immediately invoked function
//I created the function and run it at the same time
(function(name){
  console.log(`Hello ${name}`)
})

////Immediately invoked function expression
const greetB = (function(name){
  console.log(`Hello ${name}`)
  return `Hello ${name}`
}('Aishwarya'))//No need to invoke explicitly. Gets called automatically. GreetB will hold the value returned by the function

console.log('greetB', greetB)

//greetB('wew')//Will give type error: greetB is not a function. Because greetB will return a string now. Because I invoked it already and greetB contains a string now


/**
 * How to put something in global execution context from IIFE?
 */
(function(global, name){
  console.log(name)
}(window, 'Aish'))