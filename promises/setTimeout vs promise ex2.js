const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
});
  
promise.then((res) => {
    console.log(res);
});
  
console.log(4);

/**
 O/P:

 1
 2
 4
 timerStart
 timerEnd
 success

 Explantion:

 1. Sync code is executed first. Hence, 1 2 4 is executed
 2. Microtask (Promise) -> But, Promise is not fulfilled yet it is still pending so code will not execute at present
 3. Macrotask: setTimeout() callback will be executed. Hence, "timerStart" and "timerEnd" will be executed
    When resolve is called, Promise will be fulfilled. Hence, "success" will be printed
 */