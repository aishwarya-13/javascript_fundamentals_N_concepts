/**
 * 1] this is pointing to global window object
 * 
 • During a regular function invocation, 'this' equals the global object (window)
 */

 //Example 1
function a(){
  console.log(this) //window object
}

a()

//Example 2
console.log(this) //will output window object at global level

//Example 3
let c = function(){
  this.newVar = 'I am new on this'
  console.log(this)//window object
}
c()

console.log(newVar)//I can access it without using this.newV (i.e without using the dot operator) because JS engine assumes that it is on global level