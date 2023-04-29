/**
 * Comparing operands of same type
 */

console.log("hello" === "hello");//true
console.log("hello" === "hola");//false

console.log(3 === 3);//true
console.log(3 === 4);//false

console.log(true === true);//true
console.log(false === false);//false

console.log(null === null);//true

/**
 * Comparing operands of different types
 */

console.log("3" === 3);//false
console.log(true === 1);//false
console.log(null === undefined);//false
console.log(3 === new Number(3));//false

/**
 * Comparing objects
 */

const obj1 = {
    key: "value"
};

const obj2 = {
    key: "value"
};

const a = obj1;

console.log(obj1 === obj2);//false both operands refer to different memory locations
console.log(obj1 === obj1);//true both operands refer to same memory locations
console.log('objects', obj1.toString() === obj2.toString());
console.log(a === obj1);

/**
 * Interview question
 */
const fun1 = (a,b)=>(a+b);
const fun2 = (a,b)=>(a+b);
console.log('fun1 == fun2',fun1 == fun2);//false refer to different memory locations
console.log('fun1 === fun2',fun1 === fun2);//false refer to different memory locations
console.log(fun1.toString() == fun2.toString());
console.log(fun1.toString() === fun2.toString());



