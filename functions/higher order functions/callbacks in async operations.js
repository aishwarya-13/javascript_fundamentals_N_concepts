/**
 * Used in async operations like 'setTimeout' 'fetch'
 */

setTimeout(function(){
    console.log('I am a callback in setTimeout()')
},[1000])

fetch('https://someurl').then(function(response){
    return response.json()
}).then(function(data){
    console.log('I am callback in fetch api')
})