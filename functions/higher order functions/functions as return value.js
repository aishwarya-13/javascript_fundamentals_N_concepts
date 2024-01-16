function higherOrderFunction(){
    return function(){
        console.log('I was returned from a function')
    }
}

const returnedFunction = higherOrderFunction()
returnedFunction()

/**
 * Note to self: Closures are also a higher order functions
 */