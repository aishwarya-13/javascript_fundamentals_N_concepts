function higherOrderFunction(callback){
    callback()
}

//higherOrderFunction(()=>{console.log('I was passed as an argument')})

function myCallback(){
    console.log('I was passed as an argument')
}

higherOrderFunction(myCallback)