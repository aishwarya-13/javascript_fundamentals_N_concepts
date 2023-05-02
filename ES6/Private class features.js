/**
 * To make a public method private, you prefix its name with a hash #
 * Private members are not native to the language before this syntax existed. 
 * In prototypical inheritance, its behavior may be emulated with WeakMap objects or closures, 
 * but they can't compare to the # syntax in terms of ergonomics.
 */

class Person{
    #firstname;//private fields
    #lastname;
    constructor(firstname, lastname){
        this.#firstname = Person.#validate(firstname);
        this.#lastname = Person.#validate(lastname);
    }

    //Public method
    getFullname(format = true){
        return format ? this.#lastFirst() : this.#firstLast();
    }

    //Private method
    #firstLast(){
        return `${this.#firstname} ${this.#lastname}`;
    }

    //Private method
    #lastFirst() {
        return `${this.#lastname}, ${this.#firstname}`;
    }

    //static private method
    static #validate(name){
        if (typeof name === 'string') {
            let str = name.trim();
            if (str.length >= 3) {
              return str;
            }
        }
        throw 'The name must be a string with at least 3 characters';
    }
}

let personObj = new Person('Aishwarya', 'Vhatkar');
//console.log(personObj.firstLast());//cannot call private method. TypeError: personObj.firstLast is not a function
console.log(personObj.firstname);//undefined Accessing private field
console.log(personObj.getFullname(false));

class Employee extends Person{
    constructor(fname, lname, age){
        super(fname, lname);
        this.age = age;
    }
}

const empObj = new Employee('Rohit', 'Borade', 'C');
console.log(empObj);
console.log(empObj.getFullname());
//console.log(empObj.firstLast());//Error empObj.firstLast() is not a function
console.log(empObj.firstname);//undefined Accessing private field of Parent class