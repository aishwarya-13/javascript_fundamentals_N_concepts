const arr = [1,2,3]

const result = arr.reduce((prev, currentVal)=>{
    return prev + currentVal
},0)

console.log('reduce result', result)

const max = [1,100].reduce((prev, currentVal)=>{
    return Math.max(prev, currentVal)
},500)

console.log('reduce max', max)