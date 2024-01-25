function somethingAsync(fn){
    const result = 'sucess'
    setTimeout(()=>{
        fn(result)
    },0)
}

function callAsync(data){
    console.log('data', data)
}

somethingAsync(callAsync)

/**
 Here, even when the somethingAsync() execution is over, the callback inside the setTimeout still has access to fn() and result due to closures
 */