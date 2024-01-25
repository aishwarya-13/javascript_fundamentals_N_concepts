console.log('/////////////////////////////bind//////////////////////////////////////////////')
/**
 * bind()
 */

var person = {
  firstname: 'Aishwarya',
  lastname: 'Vhatkar',
  getFullName: function(){
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
}

var person2 = {
  firstname: 'Rohit',
  lastname: 'Borade',
  getFullName: function(){
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
}

var logName = function(){
  console.log(`Logged: ${this.getFullName()}`)//here 'this' depends on how the function was called.
}

//logName()//this.getFullName is not a function - because "this" in logNames will be window object and getFullName() is not present in the window object

const logNameBind1 = logName.bind(person) //logs person object
console.log(logNameBind1())
const logNameBind2 = logName.bind(person2)//logs person2 object
console.log(logNameBind2())

/**
 * Another way of calling logName
 */

var logName2 = function(){
  console.log(`Logged: ${this.getFullName()}`)//here 'this' depends on how the function was called.
}.bind(person)

logName2()

console.log('/////////////////////////////call//////////////////////////////////////////////')

/**
call(): call will execute the function. 
bind() will create a copy of the function and not execute it but call() will execute the function.
call() will take arguments 
 */

var logName3 = function(lang, job){
  console.log(`Logged: ${this.getFullName()}`)//here 'this' depends on how the function was called.
  console.log(lang + ' '+ job);
}

logName3.call(person, 'english', 'engineer')

console.log('/////////////////////////////apply//////////////////////////////////////////////')

var logName4 = function(lang, job){
  console.log(`Logged: ${this.getFullName()}`)//here 'this' depends on how the function was called.
  console.log(lang + ' '+ job);
}

logName4.apply(person2, ['english', 'engineer'])

console.log('/////////////////////////////Applications//////////////////////////////////////////////')

/**
 * Applications
 */

//1. Function borrowing
//You can grab methods from other objects use them as long as you have similar property names so that the function works
console.log('Function borrowing', person.getFullName.bind(person2)())


//2. Function currying
function multiply(a, b){
  console.log('a', a, 'b', b)
  return a * b
}

//I am giving first parameter 2 and this will permanently set 'a' to 2
const multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4))//4 will act as second parameter
console.log(multiplyByTwo(8))//8 will act as a second paremeter in this case

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(10));

/**
* So 2 is permamently set as 'a'.
* SO I have taken multiply() and made it multiplyByTwo() using bind()
* I can make a multiplyByThree() etc.
* So I took a function and creates a new function from it with some default parameters. That's called currying.
*/


function multiply(x){
  return function(y){
    return x * y
  }
}

console.log(multiply(2)(3))

console.log(multiply(3)(3))

