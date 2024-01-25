const timer1 = setTimeout(() => {
    console.log('timer1');
    const promise1 = Promise.resolve().then(() => {
      console.log('promise1')
    })
}, 0)
  
const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0)

/**
 O/P:

 timer1
 promise1
 timer2

 Explanation:

 Here there is a situation of prioritising between microtasks and macrotasks.

 How is the priority set?

 1. Execute all microtasks first
 2. Execute one macrotask
 3. Execute all (newly added) microtasks again
 4. Execute next macrotask
 5. Cycle through

Thats why, here, macrotask "timer1" is executed -> microtask Promise is executed -> Next macrotask "timer2" is executed.

 */