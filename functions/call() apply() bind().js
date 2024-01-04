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

