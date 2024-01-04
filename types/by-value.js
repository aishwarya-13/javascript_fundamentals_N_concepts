let a = 3
b = a
console.log('a', a)
console.log('b', b)
b = 5
console.log('a', a)
console.log('b', b)

/**
 * 
By Value
b = a -> a points to a one memory location and b points to another memory location
Here a and b point to different memory locations. So changing value of b will not affect a and vice versa
 */