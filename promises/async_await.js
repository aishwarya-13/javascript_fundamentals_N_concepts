// /**
//  * async await replaces the then and catch block (not the whole promise)
//  * So it basically replaces the way we "use" a promise (not the way we create it)
//  */

//Creating that returns a promise
function fetchData(){
  return new Promise((resolve, reject)=>{
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(()=>{
      const success = true
      if(success){
        resolve('Sucess')
      }else{
        reject('Error')
      }
    },2000)
  })
}


//Using the promise
async function fetchDataEample(){
  try{
    console.log('Fetching data....')
    let response = await fetchData() //using await to wait for the Promise to resolve
    console.log('res', response)//will be executed after the Promise is resolved
  }catch(error){
    console.error('error',error)//Handle error is Promise is rejected
  }
}

//call the async function
fetchDataEample()

