let a = {name:'Aishwarya'}
let b = a

console.log('a', a)
console.log('b', b)

b.name = 'Rohit'

console.log('a', a)
console.log('b', b)

/**
By Reference
b = a - > b and a point to same memory location
Because a and b are pointing to the same memory location, when we mutate b, a changes and vice versa
 */
