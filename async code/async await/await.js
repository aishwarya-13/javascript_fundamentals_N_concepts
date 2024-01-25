console.log('====================== Example 1 ====================================')

// const a = await req1()
// console.log('test')
// const b = await req2()

/**
 O/P: Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules 
 */

console.log('====================== Example 2 ====================================')

console.log('start')

function req(){
    return new Promise((resolve, reject)=>{
        console.log('promise')
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve('success')
            }else{
                reject('error')
            }
        },200000)
    })
}

async function someAsyncFunction(){
    console.log('start inside someAsyncFunction()')
    const a = await req()
    console.log('test')//this line will be executed only when the req promise has been resolved
    console.log('response a', a)
    const b = await req()
    console.log('response b', b)
    console.log('end inside someAsyncFunction()')
}

someAsyncFunction()

console.log('end')

/**

O/P:

1.Sync code will be printed first
    start
    start inside someAsyncFunction()
    promise - call for first req()
    end

2. Promsie
    test - will be printed only when line 31 is resolved (Even though it is written synchronously, it executes only after )
    response a, success
    promise
    response b, success
    end inside someAsyncFunction()
 */