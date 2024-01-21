/**
 * Example 1: Array functions
 */

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));//"array 1: length=5 last=j,o,n,e,s"
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));//"array 2: length=5 last=j,o,n,e,s"

/**
 * reverse() modifies the original array
 * slice() will include the start element but not the end element
 * end of array indexing will also start from 0
 */

console.log('====================================================================================')

/**
 * Example 2:
 */