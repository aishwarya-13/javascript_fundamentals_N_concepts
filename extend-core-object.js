/**
 * Cannot use arrow function here because arrow function will resolve 'this' lexically.
 * And this will be window in an arrow function. So use regular function.
 */

/**
 * Q: How could you write a method on instance of a date which will give you next day?
 * A: I have to declare the method on the prototype of Date object. To get access of the current value of the 
 * instance of the date, I will use this.
 */

Date.prototype.nextDay = function(){
    let currentDate = this.getDate();
    return new Date(this.setDate(currentDate + 1));
}

// const date = new Date();
// console.log('Current date', date.getDate())
// console.log(date.nextDay());

/**
 *  If i have a var str = 'hello world', how could i get str.reverse() return 'dlrow olleh'?
 */

String.prototype.reverseStr = function(){
    const str = this;
    let result = '';
    for(let i=str.length-1; i>=0; i--){
        result+= str[i];
    }
    return result || null;
};

const str = new String('hello');
console.log(str.reverseStr());

/**
 * How could you make this work [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5] ?
 */

Array.prototype.duplicator = function(){
    return this.concat(this);
};

var arr = [1,2,3,4,5];
console.log(arr.duplicator());

/**
 * Define a spacify function which takes a string as an argument, and returns the same string but with each character separated by a space. For example:
spacify('hello world') // => 'h e l l o  w o r l d'
 */

String.prototype.spacify = function(){
    const str = this;
    return str.split('').join(' ');
}

console.log('<<>>', 'hello world'.spacify());