console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');

/**
 O/P:
 
 start
 end
 promise1
 timer1
 promise2
 timer2

 Explantion:

 1. Sync code -> start, end is printed
 2. Microtask -> promise1 is printed (FYI, the whole block from line 4 to line 7 is a microtask including the setTimeout)
 3. Macrotask -> timer1 is printed (Here, macrotask adds new microtask in the task queue)
 4. Newyl added microtask -> promise2
 5. Next macrotask -> timer2
 */