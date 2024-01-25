console.log('============================ Basic ex 1 ==============================')

console.log('start')

const promise = new Promise((resolve, reject) =>{
    console.log(1)
})

console.log('end')

/**
 O/P:
 start
 1
 end

 Explanation:
    1. Synchronized code blocks are always executed sequentially from top to bottom.
    2. When we call new Promise(callback), the callback function will be executed immediately.
 */

console.log('============================= Basic ex 2 =========================================')

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})

promise1.then(res => {
  console.log('promise1', res)
})

console.log('end');

/**
 O/P:
 start
 1
 end
 2

 Explanation:
    1. In this code snippet, a piece of asynchronous code appears. That is, the callback function in .then().
    2. Remember, the JavaScript engine always executes synchronous code first, then asynchronous code.
 */

console.log('============================= Basic ex 3 =========================================')

console.log('start');

const promise2 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})

promise2.then(res => {
  console.log('promise2', res)
})

console.log('end');

/**
 O/P:

 start
 1
 3
 end
 2
 */


console.log('============================= Basic ex 4 =========================================')

console.log('start');

const promise3 = new Promise((resolve, reject) => {
  console.log(1)
})

promise3.then(res => {
  console.log(2)
})

console.log('end');

/**
 O/P:
 start
 1
 end

 Explanation:

 1. In this code, the resolve method has never been called, so promise1 is always in the pending state.
 2. So promise1.then(…) has never been executed. 2 is not printed out in the console.
 */

 console.log('============================= Basic ex 5 =========================================')

 console.log('start')

 const fn = () => (new Promise((resolve, reject) => {
   console.log(1);
   resolve('success')
 }))
 
 console.log('middle')
 
 fn().then(res => {
   console.log('promise to confuse in fn()', res)
 })
 
 console.log('end')

 /**
  O/p:
  start
  middle
  1
  end
  success

  Explanation:

  1. Execute synchronous code first, then asynchronous code
  2. Synchronous code is executed in the order in which it was called (Here call to fn() is synchronous)
  */

console.log('============================= Basic ex 6 =========================================')

console.log('start')

Promise.resolve(1).then((res) => {
  console.log('fulfilling', res)
})

Promise.resolve(2).then((res) => {
    console.log('fulfilling', res)
})

console.log('end')

/**
 O/P:
 start
 end
 1
 2
 */