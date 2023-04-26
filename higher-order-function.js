/**
 * ^^ A function which takes another function as an argument or 
 * returns a function is known as a higher order function ^^
 */

//////////////////////////////////How to Pass a Function as an Argument to Another Function////////////////////////
/**
 * Given an array return odd elements and even elements.
 * Here only the logic for filtering out odd and even elements is different so we write it in a 
 * separate function and pass it as a callback to this fucntion.
 * 
 * We are basically abstracting out the main filtering logic from the main function. We can now pass any other 
 * filtering logic as we like to filterFunction without needing to change it.
 * 
 * We can also pass the logic function as an arrow function and get the same result – 
 * that is, passing (x) => x < 5) in place of isLessThanFive will give us the same result.
 */
const filterFunction = (arr, callback)=>{
    const result = [];
    for(let i=0; i<arr.length; i++){
        callback(arr[i]) ? result.push(arr[i]) : null;
    }
    return result;
};

//Function containing logic for filtering out odd elements
function isEven(item){
    return item % 2 === 0;
}

//Function containing logic for filtering out even elements
function isOdd(item){
    return item % 2 !== 0;
}

function isGreaterThanFive(item){
    return item > 5;
}

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log('Output of filterFunction', filterFunction(arr, (x)=> x < 5));

// console.log('Output of filterFunction', filterFunction(arr, isGreaterThanFive));

/**
 * ==Creating polyfill==
 * Let's create an array prototype of our filterFunction function so that we can use it with any array.
 * "this" refers to the array the prototype is called upon
 * 
 * ^^Note: Here using an arrow function while defining filterFunctionPro cannot be used because 'this' will become window here.
 * So use a regular function
 */
Array.prototype.filterFunctionPro = function(callback){
    const result = [],
        arr = this;
    for(let i=0; i<arr.length; i++){
        callback(arr[i]) ? result.push(arr[i]) : null;
    }
    return result;
}

console.log(arr.filterFunctionPro(isOdd));

/**
 * Function chaining
 * 
 * We can also implement function chaining with our prototype implementation
 * Let's first filter out all the numbers greater than 5. Then from the result, we'll filter out all the even numbers
 */
console.log('Function chaining', arr.filterFunctionPro(isGreaterThanFive).filterFunctionPro(isEven));

/**
 * This is how we can use higher order functions in JS to write mode modular, cleaner and, more maintainable code.
 */

//////////////////////////////////How to return a Function from Another Function////////////////////////

/**
 * We can return a function from another function because we treat functions in JavaScript as values.
 */
function calculate(operation){
    switch(operation){
        case 'ADD':
            return function(a,b){
                console.log(`${a} + ${b} = ${a+b}`)
            };
        case 'SUBTRACT':
            return function(a,b){
                console.log(`${a} - ${b} = ${a-b}`)
            };
    }
}

/**
 * There are two ways to call this inner function
 * 1]Call the returned function using a variable
 * 2]Call the returned function using double parentheses
 */

const calculateAdd = calculate('ADD');
calculateAdd(2,3);

const calculateSubtract = calculate('SUBTRACT');
calculateSubtract(2,3);

calculate('ADD')(2,3);
calculate('SUBTRACT')(2,3);