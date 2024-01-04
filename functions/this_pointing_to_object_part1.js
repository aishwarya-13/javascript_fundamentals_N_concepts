/**
 If a function that resides inside the object is invoked, the 'this' will point to that object.
'this' gives the function the ability to mutate its properties.
 */

let obj = {
  firstname: 'Aishwarya',
  displayName: function(){
    console.log(this) //this points to obj
  }
}

obj.displayName()

//Changing object property values using this keyword

let obj1 = {
  firstname: 'Aishwarya',
  displayName: function(){
    this.firstname = 'Rohit'
    console.log(this) //this points to obj and value of firstname changes to Rohit
  }
}

obj1.displayName()