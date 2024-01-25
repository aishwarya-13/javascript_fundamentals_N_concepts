function counter(){
    let count = 0;
    return function(){
        count++
        console.log('Counter', count)
    }
}

const increment = counter()

increment()//1
increment()//2