/**
 * spread operator (...) is a syntax that allows you to expand elements of an iterable (like an array or a string)
 * or the properties of an object. It provides a concise and clean way to manipulate arrays and objects.
 */

/**
 * Array spreading
 * 1. Concatenating arrays
 * 2. Copying arrays
 */

//1.Concatenating arrays
const array1 = [1,2,3]
const array2 = [4,5,6]

const concatenatedArray = [...array1, ...array2]

console.log('concatenatedArray', concatenatedArray)

//2.Copying arrays
const originalyArray = [1,2,3]
const copiedArray = [...originalyArray]

//3.Adding elements to array
const newArray = [...originalyArray, 4, 5]