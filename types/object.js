let person = {
  firstname: 'Aishwarya',
  lastname: 'Vhatkar',
  age: 31,
  hobbies:['Cooking', 'MMA'],
  address:{
    city: 'Milpitas',
    zipcode: 95035
  },
  sayHello: ()=>{
    return this.firstname + this.lastname
  }
}

console.log(person)