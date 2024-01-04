/**
 * What will be logged?
 * 
 * 10 is printed 10 times Why?
 * The console log is inside the anonymous function of setTimeout and setTimeout is executed when current call stack is over. 
 * So, the loop finishes and before setTimeout get the chance to execute. However, anonymous functions keep a reference to i by creating a closure.
 * Since, the loop is already finished, the value i has been set to 10. When setTimeout use the value of i by reference, it gets the value of i as 10. Hence, you see 10 ten times.
 */
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log('i', i);  
    }, 10);
}

/**
 * Fix above code to print 1 to 10
 * 1]Using let: let will create a block scoped variable. 
 * So every time the for loop runs (i increments) it creates a new variable (new memory location)
 * 2]Using IIFE
 * 3]Using bind
 */

for(let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log('let', i);  
    }, 10);
}

for(let i = 0; i < 10; i++) {
    setTimeout((function() {
      console.log('IIFE', i);  
    })(), 10);
}

for(let i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console,i), 10);
}
