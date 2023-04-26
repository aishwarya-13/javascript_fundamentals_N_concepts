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