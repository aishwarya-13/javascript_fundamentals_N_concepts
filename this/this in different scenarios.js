/**
 * this in global context
 */

console.log('this in global context --->', this)//window


/**
 * this in function context
 */
function showThis(){
    console.log('this in function --->', this)//window
}

showThis()


/**
 * this in object method context
 */
const obj = {
    name: 'Aishwarya',
    displayName:function(){
        console.log('this in obj --->', this) //obj
    }
}

obj.displayName()


/**
 * this in Constructor context
 */
function Person(name){
    this.name = name;
    console.log('this in constructor context', this) //aish obj
}

const aish = new Person('Aishwarya')
console.log( aish.name)