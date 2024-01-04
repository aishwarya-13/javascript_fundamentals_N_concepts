/**
 * The const declaration creates a read-only reference to a value. 
 * It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned. 
 * For instance, in the case where the content is an object, this means the object's contents 
 * (e.g., its properties) can be altered.
 */

const person = {
    name:"Aishwarya",
    email:"aish@gmail.com"
}

const animal = {
    species:"Cat"
}

person.age=30;
console.log(person);//{name: 'Aishwarya', email: 'aish@gmail.com', age: 30}
//person = animal;//Typeerror: Assignment to constant variable

/**
 * Object.freeze: works on values, and more specifically, object values. It makes an object immutable, i.e. you cannot change its properties.
 */

Object.freeze(person);
person.city = 'Milpitas';
console.log(person);//{name: 'Aishwarya', email: 'aish@gmail.com', age: 30}