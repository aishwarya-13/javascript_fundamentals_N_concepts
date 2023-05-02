/**
 * ES6 simplified steps in ES5 class by using the extends and super keywords.
 */

class Person{
    myPublic = 'I am public';//public field
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //public method
    greet(){//while creating funcitons the function keyword is omitted in ES6
        return `Hello ${this.name}`;
    }
}

const personObj = new Person('Aishwarya', 30);
console.log(personObj.myPublic);//can access public field
console.log(personObj.greet());

/**
 * super() initializes the this object, you need to call the super() before accessing the this object. 
 * Trying to access this before calling super() also results in an error.
 * 
 * extends implements inheritance in ES6
 */
class Employee extends Person{
    constructor(name, age, title){
        super(name, age);//invokes Person's constructor
        this.title = title;
    }

    static company = 'Apple';

    static getEmployeeDesignation(obj){
        return `${obj.name} is a ${obj.title}`
    }
}

const empObj = new Employee('Rohit', 32, 'Lead engineer');
console.log(empObj.myPublic);
console.log(empObj.greet());//calling Parent class function that is public
console.log(Employee.getEmployeeDesignation(empObj) + ` in ${Employee.company}`);//calling static method and acessing static property