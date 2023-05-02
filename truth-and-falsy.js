/**
 * In JS 6 things are falsy and they are - false, null, undefined, 0, '',NaN, -0
 * There are only two truthy things - true and everything that is not false
 */

const a = 'false';//true //it's a string with length greater than 0. Only empty string is false.
const b = ' ';//true //it's not an empty string. There is a white space in it.
const c = {};//true. It's an object. An object without any property is an object can't be falsy.
const d = [];//true. It's an array object (array is child of object) is truthy
const e = new String('');//true. Though you are passing empty string to the string constructor, it is creating an String object. More precisely a instance of String object. It becomes an object. Hence, it is not false. so, it is truthy.
const f = new Boolean(false);//true. As it creates an instance of the Boolean object which is an object. Object is truthy.
const g = Boolean(function(){});//true. if you pass a truthy value to Boolean, it will be true.
const h = Boolean(/foo/);//true
const i = true%1;//When you are trying to find reminder of true, true becomes 1 and reminder of 1 while dividing by 1 is 0. you will get same result if you doe false%1
const j = ''%1;//true

//Here non-boolean value is coereced to boolean value
if(f){
    console.log('its true');
}else{
    console.log('its false');
}