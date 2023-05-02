# ES6 class
Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.

// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

# constructor
-> The constructor method is a special method of a class for creating and initializing an object instance of that class.
-> A class cannot have more than one constructor method.
-> If you don't provide your own constructor, then a default constructor will be supplied for you.
-> If your class is a base class, the default constructor is empty: constructor() {}
-> If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:
    constructor(...args) {
        super(...args);
    }

# Private class features
-> To make a public method private, you prefix its name with a hash #
-> Private methods can be called inside the class, not from outside of the class or in the subclasses.
-> Private fields and methods are not accessible to derived classes.
-> In practice, you use private methods to minimize the number of methods that the object exposes.
-> Private fields are defined in class body


# static 
-> Static methods and fields
-> Static properties (fields and methods) are defined on the class itself instead of each instance. 
-> Static methods are often used to create utility functions for an application, 
  whereas static fields are useful for caches, fixed-configuration, or any other data that don't need to be replicated across instances.