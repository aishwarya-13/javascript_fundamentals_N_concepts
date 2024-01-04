/**
In pass by value, function is called by directly passing the value of the variable as an argument.
So any changes made inside the function does not affect the original value.
Parameters passed as an arguments create its own copy (new variables are created that are local to the function)
 */

var a = 10,
    b = 20;

console.log(`Before caliing change() a = ${a} b = ${b}`);

function change(a,b){
    let temp = a;
        a = b;
        b = temp;
    console.log(`Inside function a = ${a} b = ${b}`);
}

change(a,b);

console.log(`After calling change() a = ${a} b = ${b}`);

console.log(`================End of pass by value example========================`)

/**
In pass by reference, function is called by directly passing the addresses/references of variable as an argument.
So changing the value inside the function also changes the original value.
In JS, arrays and objects follow pass by reference property.
Parameters passed as an arguments does not create its own copy.
 */

/**
 * Note: In Pass by Reference, we are mutating the original value. when we pass an object as an arguments 
 * and update that object’s reference in the function’s context, that won’t affect the object value. 
 * But if we mutate the object internally, It will affect the object
 * 
 * In this code snippet, change1 takes an object as a parameter, but inside the function, a new object is assigned 
 * to the local variable myobj1. This reassignment creates a new reference, and any modifications made to this 
 * local variable inside the function do not affect the original object outside the function. Therefore, 
 * the output after calling change1 remains the same as the original object.
 */

//Example 1: Updating the object reference in the function

var myobj1 = {
    a:20,
    b:30
}

console.log(`Before: ${JSON.stringify(myobj1)}`);//Before: {"a":20,"b":30}

function change1(myobj1){
    //Changing the reference of the object
    myobj1={
        a:20,
        b:30,
        c:'I am new'
    }
    myobj1.d = 'I am new too'
    console.log(`Inside function: ${JSON.stringify(myobj1)}`);//Inside function: {"a":20,"b":30,"c":"I am new","d":"I am new too"}
}

change1(myobj1);

console.log(`After: ${JSON.stringify(myobj1)}`);//After: {"a":20,"b":30}

console.log(`===================End of pass by reference example=====================`)

/**
 * In this code snippet, change2 also takes an object as a parameter, but instead of reassigning the
 * local variable, it directly modifies the properties of the original object. Since objects in JavaScript are
 * passed by reference, changes made to the object inside the function affect the original object outside the
 * function. Therefore, after calling change2, the original object is mutated, and the new property c is added.
 */
//Example 2: Mutating the original object
const myobj2 = {
    a:20,
    b:30
}

console.log(`Before: ${JSON.stringify(myobj2)}`);//Before: {"a":20,"b":30}

function change2(myobj2){
    //Mutating the original object
    myobj2.c = 'I am new'
    console.log(`Inside function: ${JSON.stringify(myobj2)}`);//Inside function: {"a":20,"b":30,"c":"I am new"}
}

change2(myobj2);

console.log(`After: ${JSON.stringify(myobj2)}`);//After: {"a":20,"b":30,"c":"I am new"}

/**
 * In summary, the first code snippet changes the reference of the local variable inside the function,
 * which does not affect the original object outside the function. The second code snippet mutates the original
 * object directly, and those changes persist outside the function.
 */

console.log(`===================End of pass by reference example=====================`)

var num = 10,
    namee = "Monica Geller",
    obj1 = {
      value: "first value"
    },
    obj2 = {
     value: "second value"
    },
    obj3 = obj2;
 
function change3(num, namee, obj1, obj2) {
    num = num * 10;
    namee = "Rachael Green";
    obj1 = obj2;
    obj2.value = "new value";//mutating the object so will change the original
}
 
change3(num, namee, obj1, obj2);
 
console.log(num); // 10
console.log(namee);// "Monica Geller"
console.log(obj1.value);//"first value"
console.log(obj2.value);//"new value"
console.log(obj3.value);//"new value"  