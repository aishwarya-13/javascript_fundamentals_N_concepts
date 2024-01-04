/**
 * "arguments" object is a special object that is available inside all functions and contains an array-like
 * list of the arguments passed to the function
 * It allows you to access the arguments by their index, similar to how you would access elements in an array.
 */

function greet(firstname, lastname){
  console.log('arguments', arguments)
  console.log('arguments', arguments[0])
  console.log('arguments', arguments[1])
  console.log('arguments length', arguments.length)
  for(let i=0; i<arguments.length; i++){
    console.log(arguments[i])
  }
}

greet('Aishwarya', 'Vhatkar')

/**
 * Arrow functions do not have their own "arguments" object.
 * If you need access to arguments in an arrow function, you can use the rest parameter syntax instead.
 */
const arrowFuncGreet = (...args)=>{
  //console.log('arguments', arguments)//arguments is not defined
  console.log('args', args)
  console.log('args 0', args[0])
  console.log('args 1', args[1])
}

arrowFuncGreet('Aishwarya', 'Vhatkar')

/**
 * While the "arguments" object is still functional, it's worth noting that with the introduction of the rest
 * parameter syntax (...args), it's often more common to use that syntax for better clarity and flexibility when
 * dealing with variable numbers of arguments.
 */