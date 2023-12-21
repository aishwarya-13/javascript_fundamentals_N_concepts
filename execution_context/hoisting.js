/**
 * 
	What is hoisting?
	
	• It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
	• Hoisting allows you to refer to JavaScript variables and functions prior to their declaration.
	• How come the variables and functions are available? Because when execution context is created, It also sets up the memory space for variables and functions. Hence, before
	aFun
 your code begins execution line by line it has already set aside memory space for the variables and functions that you've created.
 */

 //function and variables are hoisted

 console.log(message); // "Hello, world!"
 var message = "Hello, world!";

 console.log(a)
 var a;
 a = 'wewe'

 //Function hoisted but not variable initialization

// fun()
// console.log('a', a) //undefined

//  function fun(){
//   console.log('I am fun(). And I am hoisted')
//  }

// var a = 'I am not hoisted'