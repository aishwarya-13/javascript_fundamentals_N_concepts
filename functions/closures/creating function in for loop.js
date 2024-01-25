console.log('==================Closures===================')

function buildFunctions(){
  const arr = []
  for(var i=0; i<3; i++){
    arr.push(function(){
      console.log(i)
    })
  }
  return arr
}

//console.log(buildFunctions())//[ƒ, ƒ, ƒ]

const fs = buildFunctions()
fs[0]()//3
fs[1]()//3
fs[2]()//3

/**
* What happens above?
* 1] Global execution context is created with "buildFunctions" and "fs" in it.
* 2] Execution context for 'buildFunctions' is created with 'i' and 'arr' in it.
* a) The for loop is run and at i=0 and function is added to the array. But the function is not executed (the console.log is not executed). This is the point of confusion.
* b) i continues and it adds another function to the array
* c) i is 2 and adds another function to the array
* When i is 3 the for loop ends. So, the last value is i is 3.
* So i=3 and arr has 3 functions in the memory.
* 3]'buildFunctions' execution context is popped off from stack. But i =3 and arr are still hanging around.
* 4] When fs[0] is executed it excecutes console.log(i) -> but i is not present in its execution context. So it looks for it in its scope chain.
* It goes to its outer reference (buildFunctions execution context) and sees i=3. Therefore it outputs 3
* 5]Same happens for fs[1] and fs[2]
*/

/**
 * How to fix it?
 * 1. Use let
 * 2. Use IIFE
 */

console.log('================= Using let =================================')

/**
* let is a block scope variable. So every time the for loop runs (i increments) it creates a new variable (new memory location)
* So when fs[0] looks for variable i it gets i=0.
* When fs[1] runs its gets i=1, when fs[2] is run it gets i=2
*/

function buildFunctions2(){
  var arr = [];
  for(let i=0; i<3; i++){
    arr.push(function(){
      console.log(i);
    })
    }
    return arr;
  }
  
  
  var fs2 = buildFunctions2();
  fs2[0]();//0
  fs2[1]();//1
  fs2[2]();//2


console.log('================= Using IIFE =================================')

/**
* In previous examples we executed the individual function later so we got the value of i =3
* Here we execute the functions immediately after its creation so we get i=0, i=1 and i=2
* And since the inner function is an expression, it return a value when its immediately invoked. 
* It does not return the function but returns the value of the function execution. So in arr we get [undefined, undefined, undefined]
*/

  function buildFunctions3(){
    const arr = []
    for(var i=0; i<3; i++){
      arr.push((function(){
        console.log(i)//1 2 3
      })())
    }
    return arr
  }
  
  //console.log(buildFunctions())//[ƒ, ƒ, ƒ]
  
  buildFunctions3()

  console.log('================= Using IIF =================================')

/**
* Ex 2
* Since IIFE will return the result of the function execution, we will return a function from the IIFE.
* Hence, our array will contain the individual functions.
* I will pass i to the IIFE so when j looks for a value it will not go up till the for loop function. 
* It will get value of j in its parent execution context. j will store that value of i at that moment it was executed in the loop
*/

function buildFunctions4(){
  var arr = []
  for(var i=0; i<3; i++){
    arr.push((function(j){
      return function(){
        console.log(j)
      }
    })(i))
  }
  return arr
}

const fs4 = buildFunctions4()
fs4[0]()
fs4[1]()
fs4[2]()


console.log('================= Using bind() =================================')

function buildFunctions5(){
  var arr = []
  for(var i=0; i<3; i++){
    arr.push(function(j){
      console.log(j)
    }.bind(console, i))
  }
  return arr
}

const fs5 = buildFunctions4()
fs5[0]()
fs5[1]()
fs5[2]()