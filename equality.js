/**
 * Example 1: Comparison with no type conversion
 */

console.log(1 == 1);
console.log('hello' == 'hello');

/**
 * Example 2: Comparison with type conversion
 */

/**
 * Converting string to number
 */
console.log("1" == 1); //true
console.log(1 == "1"); //true

/**
 * //Converting boolean to number
 */
console.log(0 == false); //true
console.log(1 == true);//true 
console.log(1 == false); //false
console.log(0 == true); //false

/**
 * If one of the operands is "null" or "undefined", the other must also be "null" or "undefined" to return true. 
 * Otherwise return false.
 */
console.log(0 == null); //false
console.log(0 == undefined); //false
console.log(null == undefined);//true

/**
 * ! operator
 
 * !null = true          !!null = false
 * !undefined = true     !!undefined = false
 */
console.log(!undefined, !!undefined);
console.log(!null, !!null);
console.log(0 == !!null);//true
console.log(0 == !!undefined);//true
console.log(1 == !null);//true
console.log(0 == !undefined);//false

/**
 * Comparison of objects
 */
const obj1 = {
    key: "value"
};

const obj2 = {
    key: "value"
};

console.log(obj1 == obj2);//false both operands refer to different memory locations
console.log(obj1 == obj1);//true both operands refer to same memory locations

/**
 * Number object converted to number primitive
 */
const number1 = new Number(13);
const number2 = new Number(16);
console.log(number1 == 13);//true
console.log(number1 == number2);//false

/**
 * Comparing strings to String objects
 */
const string1 = 'hello';
const string2 = String('hello');
const string3 = new String('hello');
const string4 = new String('hello');
console.log(string1 == string2);//true string2 object is converted to string primitive
console.log(string1 == string3);//true string3 object is converted to string primitive
console.log(string2 == string3);// true string2 and string3 both converted to primitive
console.log(string3 == string4);// false because both are of same type so no conversion. Both refer to different memory locations. So false
console.log(string4 == string4);//true both are of same type and both operands refer to same memory location

/**
 * Comparing Dates and strings
 */
const d = new Date("April 29, 2023 03:24:00");
const s = d.toString();
console.log(d == s);//true  both operands are of different types so conversion takes place

/**
 * Comparing arrays and strings
 */
const arr = [1,2,3];
const str = "1,2,3";
console.log(arr == str);//true  array converts to string

const arr2 = [true, 0.5, 'hi'];
const str2 = arr2.toString(); //"true,0.5,hi"
console.log(arr2 == str2);//true









