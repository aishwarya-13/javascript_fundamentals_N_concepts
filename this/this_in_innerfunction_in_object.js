/**
 * Understanding 'this' in a function that resides in a function that resides in an object.
 ▪ The context of the inner function (except arrow function) depends only on its own invocation type, 
 but not on the outer function's context.
 ▪ To make this have a desired value, modify the inner function's context with indirect invocation 
 (using .call() or .apply() ) or create a bound function using .bind()
 */

let obj = {
  firstname: 'Aishwarya',
  displayName: function(){
    this.firstname = 'Rohit'
    console.log('this in displayName',this)//this points to obj and firstname changes to Rohit - this is obj because displayName is invoked with obj
    setName = function(){
        this.firstname = 'Name changing again'//Here firstname of obj is not mutated. What happens is a new variable 'firstName' is created on the window object
        console.log('this in setName',this)//this is window object because see how setName is invoked
    }
    setName()
  }
}

obj.displayName()

console.log('=============================================================')

/**
 * So in above scenario 'this' gives unintended error. What can we do in this case?
 * 1. Use a self variable
 * 2. Use arrow function
 * 3. Use bind()
 */

//Solution 1. Using self variable
let obj1 = {
  firstname: 'Aishwarya',
  displayName: function(){
    const self = this//self points to the same memory location as 'this'. And 'this' is pointing to the my whole object
    self.firstname = 'Rohit'
    console.log('this in displayName in obj1',self)//this points to obj
    setName = function(){
      //Since self isn't declared here so it will look in the outer lexical env. It will find it there.
			//So the self used here will end up being the object (since this points to the object).
			//So I can mutate my object here as well
      self.firstname = 'Name changing again'//Here firstname of obj is not mutated. What happens is a new variable 'firstName' is created on the window object
      console.log('self in setName in obj1', self)//this is window object because see how setName is invoked
    }
    setName()
  }
}

obj1.displayName()

console.log('=============================================================')

//Solution 2. Using bind()
let obj2 = {
  firstname: 'Aishwarya',
  displayName: function(){
    this.firstname = 'Rohit'
    console.log('this in displayName in obj2',this)//this points to obj and firstname changes to Rohit - this is obj because displayName is invoked with obj
    setName = function(){
      this.firstname = 'I am changing name again!'
      console.log('this in setName in obj2', this)
    }
    setName.bind(this)()//set this of setName() to the this in displayName which is pointing to obj
  }
}

obj2.displayName()

console.log('=============================================================')

//Solution 3 : Using arrow function
/**
	* Solution to 'this' using arrow functions
	* Arrow functions make use of lexical env.
	They resolve 'this' lexically
	* So value of 'this' will depend on where we are placing it.
	* So this in the inner function of map will point to team object
	So using arrow functions the value of this will behaves as we would expect it to be.
**/

let obj3 = {
  firstname: 'Aishwarya',
  displayName: function(){
    this.firstname = 'Rohit'
    console.log('this in displayName in obj2',this)//this points to obj and firstname changes to Rohit - this is obj because displayName is invoked with obj
    setName = ()=>{
      this.firstname = 'I am changing name again!'
      console.log('this in setName in obj2', this)
    }
    setName()
  }
}

obj3.displayName()

/**
 * So -> For a regular function the value of this will depend how the function is invoked
 * And for a arrow function, the value of this will resolve lexically
 */