/**
 * Danger: Don't name any argument as "arguments" or dont create any local variable named as "arguments", this will override build in arguments object.
 */

/**
 * Write a simple function to tell whether 2 is passed as parameter or not?
 * 
 * arguments is a local variable, available inside all functions that provides a collection of all the arguments passed to the function.
 * arguments is not an array rather an array like object. It has length but doesn't have the methods like forEach, indexOf, etc.
 * First convert arguments to an array by calling slice method on an array and pass arguments. After that simply use indexOf.
 */

function isTwoPassed(){
    console.log(arguments);
    const args = Array.prototype.slice.call(arguments);
    return args.indexOf(2) !== -1;
};

console.log(isTwoPassed(1,2));//true
console.log(isTwoPassed(3,4,5,6));//false
console.log(isTwoPassed(2));//true

/**
 * How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"
 */

function logPrefix(){
    const args = Array.prototype.slice.call(arguments);
    args.unshift('(app)')
    console.log.apply(console, args);
}

logPrefix('my message'); //(app) my message
logPrefix('my message', 'your message'); //(app) my message your message 