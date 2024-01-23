console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')

/**
 O/P:
 start
 end
 resolve
 setTimeout

 Explanation:

 1. Synchronous code gets executed sequentially
 2. When there are multiple asynchronous code then what is sequence of them getting executed?
    -> The one that finishes first gets executed immediately
    -> But what if two async functions gets completed at same time, like in example above. Whose callback gets executed?
        -> Here, in setTimeout, the timer is 0 second and Promise.resolve() will also return a fulfilled Promise object
            immediately after execution.
    -> Both the events are sent to event loop
        -> But event loop maintains a priority of the async tasks
            -> Tasks with higher priority are called microtasks. Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
            -> Tasks with lower priority are called macrotasks. Includes: setTimeout , setInterval and XHR
    -> Since, Promise has more priortiy than setTimeout, Promise callback gets called first and setTimeout second
 */