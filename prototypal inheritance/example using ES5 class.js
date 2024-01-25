function Person(name, age){
    this.name = name;
    this.age = age;
}

const aishObj = new Person('Aishwarya', 30);
console.log(aishObj);//Person {name: 'Aishwarya', age: 30}

/**
 * Since the prototype and __proto__ refer to the same object, whenever you add a new function on the prototype 
 * it becomes available on all instances.
 */

Person.prototype.greet = function(){
    return `Hello ${this.name}`;
}

console.log(aishObj.greet());//Hello Aishwarya

//<< Creating inheritance >>
function Employee(name, age, title){
    //Call constructor of super class (parent class) to initialize superclass-derived members
    Person.call(this, name, age);
    //Initialize sub classes own members
    this.title = title;
}

/**
 * << Create Employee prototype from Person prototype >>
 * If you comment this line then you will get error (hit.greet is not a function) when you call empObj.greet()
 * So this line is basically inheriting Person's prototype properties into Employee class.
 * Here we inherited greet() method from Person class to Employee class and we didn't have to rewite the greet function
 * 
 * It sets the prototype of "Employee" constructor to a new object created by Person.prototype.
 * This establishes a prototype chain where Employee inherits from Person
 */
Employee.prototype = Object.create(Person.prototype);//sets up the prototype chain
/**
 * <<Restore Employee's constructor after inheritance>>
 * While not strictly necessary, it's there to preserve some useful invariants, as we'll see below. 
 * Since the assignment to Employee.prototype kills the existing Employee.prototype.constructor 
 * (which was set to Employee when the Employee constructor was created), we restore it.
 * Console and see the constructor of Employee object before and after below line(points to Employee class correctly)
 * 
 * It corrects the 'constructor' property of Employee 'prototype' to point back to 'Employee' constructor.
 * This step is necessary because the previous line modified  the prototype
 */
Employee.prototype.constructor = Employee;

const empObj = new Employee('Rohit', 32, 'Lead Engineer');
console.log(empObj);//Employee {name: 'Rohit', age: 32, title: 'Lead Engineer'}
console.log(empObj.greet());//Hello Rohit

console.log('empObj instanceof Person', empObj instanceof Person);//true
console.log('empObj instanceof Employee', empObj instanceof Employee);//true
console.log('aishObj instanceof Person', aishObj instanceof Person);//true
console.log('aishObj instanceof Employee', aishObj instanceof Employee);//false
console.log('aishObj instanceof Object', aishObj instanceof Object);//true
console.log('empObj instanceof Object', empObj instanceof Object);//true

/**
 * Here are some things we can do with the constructor property that wouldn't have been possible had we not preserved it
 */

console.log('empObj.constructor === Employee', empObj.constructor === Employee);//true <<false when Employee.prototype.constructor = Employee; commented

/**
 * Create a new Employee object based on an existing Employee instance
 */
const new_empObj = new empObj.constructor('Ojas', 28, 'Manager');
console.log('new_empObj', new_empObj);//Employee {name: 'Ojas', age: 28, title: 'Manager'}



