/**
• JavaScript has two different approaches for testing equality. 
• Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and user defined objects are compared by their reference.
• This means it compares whether two objects are referring to the same location in memory.
 */

/**
 * Equality check will check whether two objects have same value for same property. 
 * 1]Get keys of both the objects
 * 2]If keys length is not equal return false
 * 3]Else iterate keys and check the values in both the objects.
 */

function isEqual(obj1, obj2){
    const obj1Props = Object.getOwnPropertyNames(obj1),//will give an array of keys in an object
        obj2Props = Object.getOwnPropertyNames(obj2);
    //if length is not equal return false
    if(obj1Props.length !== obj2Props.length){
        return false;
    }
    //check value of all the keys in both the objects
    for(let i=0; i<obj1Props.length; i++){
        const propName = obj1Props[i];
        if(obj1[propName] !== obj2[propName]){
            return false;
        }
    }
    return true;
}

const person1 = {
    name:"Aishwarya",
    email:'aish@gmail.com',
    age: 30,
    city:null
}

const person2 = {
    name:"Rohit",
    email:'aish@gmail.com',
    age: undefined,
    city:undefined
}

console.log(isEqual(person1, person2));