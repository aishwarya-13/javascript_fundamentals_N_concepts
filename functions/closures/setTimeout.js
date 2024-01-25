/**
 * What will be logged?
 * 
 * 3 is printed 3 times Why?
 * The console log is inside the anonymous function of setTimeout and setTimeout is executed when current call stack is over. 
 * So, the loop finishes and before setTimeout get the chance to execute. However, anonymous functions keep a reference to i by creating a closure.
 * Since, the loop is already finished, the value i has been set to 3. When setTimeout use the value of i by reference, it gets the value of i as 3. Hence, you see 3 3 times.

More explanation:

The code snippet executes in 2 phases.
Phase 1
	1. for() iterating 3 times. During each iteration a new function log() is created, which captures the variable i. setTimout() schedules log() for execution after 1000ms.
	2. When for() cycle completes, i variable has value 3.
Phase 2
The second phase happens after 1000ms:
	1. setTimeout() executes the scheduled log() functions. log() reads the current value of variable i, which is 3, and logs to console 3.
That's why 3, 3, 3 is logged to the console.
*/
for(var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log('i with var', i);  
    }, 10);
}

/**
 * Fix above code to print 1 to 10
 * 1]Using let
 * 2]Using IIFE
 * 3]Using bind
 */


/**
 * let will create a block scoped variable
 * So every time the for loop runs (i increments) it creates a new variable (new memory location)
 */
for(let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log('let', i);  
    }, 10);
}

/**
 * In previous examples we executed the individual function later so we got the value of i =3 
 * Here we execute the functions immediately after its creation so we get i=0, i=1 and i=2 
 * And since the inner function is an expression, it return a value when its immediately invoked.  
 * It does not return the function but returns the value of the function execution.
 */
for(let i = 0; i < 10; i++) {
    setTimeout((function() {
      console.log('IIFE', i);  
    })(), 10);
}


/**
 * Using bind
 */
for(let i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console,i), 10);
}
