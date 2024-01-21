/**
 * 	• Tell this: Closure is a feature in JS, where the inner function has access to outer function's lexical env (variables) even after the outer function has returned or completed its execution.
	• In JS, closure is a combination of a function and the lexical environment within which that function was declared. 
	• It allows a function to access variables, functions, and other data from its outer scope even after the outer function has finished executing.
    So, the inner function has still access to outer function's variables. This is called closure.
 */

console.log('Example 1 --> Greet function')

function outerFunc(greet){
    return function(name){
      return `${greet} ${name}!`
    }
}
  
const greetMeEnglish = outerFunc('Hello')
console.log(greetMeEnglish('Aishwarya'))
  
const greetSpanish = outerFunc('Hola')
console.log(greetSpanish('Amigos!'))


console.log('Example 2 --> Adder factory function')

function makeAdder(a){
    return function(b){
        return a + b
    }
}

const add5 = makeAdder(5)
console.log('add5', add5(2)) //7

const add10 = makeAdder(10)
console.log('add10', add10(2)) //12