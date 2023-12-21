/**
  • Scope means where I can access the variable. And chain is those links of outer env references.
	• When we request a variable, JS engine looks for it in its current variable env. If it can't find it 
  there it will look in its outer env.
		○ The outer reference where that points to is going to depend on where the function sits lexically.
		○ So b() sits lexically not inside a but at the global level.
	• When a function is invoked JS creates an outer reference for that execution context and it looks at 
  where the code was physically sitting.
This entire act of searching this chain of references to outer env is called scope chain
 */

/**
 * The outer reference where that points to is going to depend on where the function sits lexically.
 * So b() sits lexically not inside a but at the global level.
 */
////////////
// function b(){
//   console.log('myVar in b', myVar)
// }

// function a(){
//   var myVar = 2
//   b()
//   console.log('myVar in a()', myVar)
// }

// var myVar = 1
// console.log('myVar globally', myVar)
// a()
//////////


///// Example 2
// function a(){
//   function b(){
//     console.log('myVar in b', myVar)//undefined will not take the global value because it will refer to myVar in a
//   }
//   b()
//   var myVar = 2;
// }

// var myVar = 1
// console.log('myVar globally', myVar)
// a()
/////////

////Example 3
// function a(){
//   function b(){
//     console.log('myVar in b', myVar)//1 - take the global value
//   }
//   b()
// }

// var myVar = 1;
// a()
///////


//////
function a(){
  function b(){
    var myVar = 2;
    console.log('myVar in b', myVar)//2 - take the a() value
  }
  b()
}

var myVar = 1;
a()

