/**
 * Function currying: It is a technique that transforms a function with multiple arguments into several functions with
 * a single arguments in sequence
 * i.e it transforms a function from f(a,b,c) to f(a)(b)(c)
 *  * Curried functions are constructed by chaining closures and by defining and immediately returning their inner functions simultaneously.
	Why is currying in JS useful?
	1. Currying helps you avoid passing the same variable again and again (like the log example)
It helps to create a higher order function
 */

function curry(f){
    return function(a){
        return function(b){
            return f(a,b)
        }
    }
}

function sum(a,b){
    return a + b
}

let curriedSumm = curry(sum)

const result = curriedSumm(5)(2)

console.log(result)

console.log('=======================================Real life example usage================================================')

/**
 * Currying? What for?
 * For instance, we have the logging function log(date, importance, message) that formats and outputs the information. 
 * In real projects such functions have many useful features like sending logs over the network, here we’ll just use alert
 */

function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

//Lets curry it for example
log = _.curry(log);

//After that log works normally:
log(new Date(), "DEBUG", "some debug"); // log(a, b, c)

//…But also works in the curried form:
log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());

// use it
logNow("INFO", "message"); // [HH:mm] INFO messa

//Now logNow is log with fixed first argument, in other words “partially applied function” or “partial” for short.

//We can go further and make a convenience function for current debug logs:

let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] DEBUG message

console.log('=================================Advanced implementation for multi argument==============================================')

function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
  console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
  console.log( curriedSum(1)(2)(3) ); // 6, full currying