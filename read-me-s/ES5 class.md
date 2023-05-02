# ES5 class and prototypal inheritance

ES5 class created using Function constructor
• A normal function that is used to construct objects using new operator.
• The 'this' variable points to a new empty object and that object is returned from the function automatically.
• New operator makes the new objects and function constructors are used for adding properties 
    and methods to that new object.
• Use a capital letter to the function name when using function as function constructor.

-> new is an operator
-> What happens when new is called? 
1]Immediately an empty object {} is created 
2]Person is called by passing the reference of the object to it: Person.call({},'Aishwarya', 30)
3]Inside Person 'this' points to the empty object being created by the new operator that is passed as an argument above
4]The object's proto is set to the function's prototype using {}.__proto__ == Person.prototype
5]Finally return the object and thats what we get into 'aish'.
And if you do not return anything, it will return you the empty object
So the function is letting me construct an object via a function

Since the prototype and __proto__ refer to the same object, whenever you add a new function on the prototype it becomes available on all instances.

