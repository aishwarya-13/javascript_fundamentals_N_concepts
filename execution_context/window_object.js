/**
 * 	• In JS when we say global, that means not inside a function.
  When you create variables and functions that are not inside any function, they get attached to the global object.
  			You can find 'a' and 'b' inside window object.
			Type 'a' or 'window.a'
			So when your variables and functions that are not lexically sitting inside a function, they are sitting on the global object. 
 */

var a = 'Hello World!'

var aFun = function(){
  console.log('I am a function')
}

console.log('window', window)
console.log('window.a', window.a)
console.log('window.aFun', window.aFun)