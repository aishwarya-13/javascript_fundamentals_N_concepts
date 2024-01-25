function myPromise(){
  //1. Create a promise
  let myPromise = new Promise((resolve, reject)=>{
    //simulate a asynchronous event
    setTimeout(()=>{
      //if success, resolve the promise
      let success = true
      if(success){
        resolve('Data fetch is successfull!')
      }else{
        reject('Error is data fetching!')
      }
    }, 1000)//simulate a 2-second delay
  })
  return myPromise
}



//2. Using the promise
myPromise().then((result)=>{
  //this will execute if promise is resolved
  console.log('promise result', result)
}).catch((error)=>{
  //this will execute if promise is rejected
  console.log(error)
})