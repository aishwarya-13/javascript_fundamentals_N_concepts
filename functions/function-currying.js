/**
 * How would you implement currying for any functions?
 * Currying allows you to easily create custom functions by partially invoking an existing function.
 * What is curring: Curring is partial invocation of a function. 
 * Currying means first few arguments of a function is pre-processed and a function is returned. 
 * The returning function can add more arguments to the curried function.
 * 
 * Generally, curry returns a copy of the invoking function, with its first n arguments pre-assigned with 
 * the arguments passed by the curry invocation.
 * The returned function expects to be invoked with additional argument(s) which it will concatenate 
 * with the argument(s) it got from the curry function.
 * 
 */

//Example 1: Using closures

function addBase(base){
    return function(num){
        return base + num;
    }
}

var addTen = addBase(10);
console.log(addTen(5));
console.log(addTen(80));
var addHunderd = addBase(100);
console.log(addHunderd(10));

//Example 2: Adding curry method to prototype
/**
 * 
If no parameters is passed to curry, you simply return the current function. 
If you have provided arguments to curry there are two steps

Step-1: Concatenate old arguments (provided while creating curry), with new arguments 
(added after cooking little bit) by using args.concat(toArray(arguments))
Step-2: Pass all the arguments to the function by using apply.
Extra: Just be careful to retain the value of this.
 */

Function.prototype.curry = function(){
    if(arguments.length < 1){
        return this;//nothing to curry with - return function
    }
    var self = this;//this will contain current function
    var oldArgs = toArray(arguments);
    return function(){
        return self.apply(this, oldArgs.concat(toArray(arguments)));
    }
}

function toArray(args){
    return Array.prototype.slice.call(args);
}

const converter = function(ratio, input, symbol){
    return [(input*ratio).toFixed(1),symbol].join(" ");
}

var kilosToPounds = converter.curry(2.2,"lbs");
var litersToUKPints = converter.curry(1.75, "imperial pints");
var litersToUSPints = converter.curry(1.98, "US pints");
var milesToKilometers = converter.curry(1.62, "km");

kilosToPounds(4); //8.8 lbs
litersToUKPints(2.4); //4.2 imperial pints
litersToUSPints(2.4); //4.8 US pints
milesToKilometers(34); //55.1 km

/**
 * Using bind
 */

function multiply(a,b){
    return a* b;
}

var multiplyByTwo = multiply.bind(this, 2);	//I am giving first parameter 2 and this will permanently set 'a' to 2
console.log(multiplyByTwo(2));//4
console.log(multiplyByTwo(4));//8