function Pet(type, legs){
  this.type = type
  this.legs = legs
  this.logInfo = function(){
    console.log(`The ${this.type} has ${this.legs} legs`)
  }
}

const myCat = new Pet('Cat', 4)

myCat.logInfo()//The Cat has 4 legs

setTimeout(myCat.logInfo, 1000)//The undefined has undefined legs

//This is equivalent to setTimeout(myCat.logInfo, 1000);
const extractedLogInfo = myCat.logInfo
setTimeout(extractedLogInfo())//The undefined has undefined legs

/**
	You might think that setTimeout(myCat.logInfo, 1000) will call the myCat.logInfo(), 
	which should log the information about myCat object.
	Unfortunately the method is separated from its object when passed as a parameter: setTimeout(myCat.logInfo).
	When the separated logInfo is invoked as a function, this is global object or undefined in strict mode
  (but not myCat object). 
	So the object information does not log correctly.
*/

/**
 * Solution?
 * 1. Use arrow function
 * 2. Use call(), apply() or bind()
 */

//1. Using arrow function
function Pet1(type, legs){
  this.type = type
  this.legs = legs
  this.logInfo = ()=>{
    console.log(`Pet1, The ${this.type} has ${this.legs} legs`) //The Cat has 4 legs
  }
}

const myCat1 = new Pet1('Cat', 4)

setTimeout(myCat1.logInfo, 1000)//The undefined has undefined legs

//Use call(), apply() or bind()
function Pet2(type, legs){
  this.type = type
  this.legs = legs
  this.logInfo = ()=>{
    console.log(`Pet2, The ${this.type} has ${this.legs} legs`) //The Cat has 4 legs
  }
}

const myCat2 = new Pet2('Cat', 4)
setTimeout(myCat2.logInfo.apply(myCat2), 1000)//The Cat has 4 legs
setTimeout(myCat2.logInfo.call(myCat2), 1000)//The Cat has 4 legs
setTimeout(myCat2.logInfo.bind(myCat2), 1000)//The Cat has 4 legs

/**
 Because the function invocation has the biggest impact on this, from now on do not ask yourself:
	Where is this taken from?
	but do ask yourself:
	How is the`function invoked?`
	For an arrow function ask yourself:
  What is this inside the outer function where the arrow function is defined?
 */
