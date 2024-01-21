/**
 Write a function sum() that works for both the below invocation
 */

function sum(a,b){
    if(arguments.length === 1){
        return (b)=>{ return a + b}
    }
    return arguments[0] + arguments[1]
}

//OR

// function sum(a,b){
//     if(b === undefined){
//         return (b)=>{ return a + b}
//     }
//     return arguments[0] + arguments[1]
// }

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5