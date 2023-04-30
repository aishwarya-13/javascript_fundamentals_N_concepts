/**
 * How could you use Math.max to find the max value in an array?
 * 
 * apply() taskes arguments as an array so pass the given array whose max has to be taken.
 * And since we are not reading anything from this or not using it at all, we will pass null.
 */

function getMaxInArray(arr){
    return Math.max.apply(null, arr);
}

console.log(getMaxInArray([1,2,3,4,5]));