  /**
   * 
  Here we are treating a function just like a variable. This is called first class functions.
	A programming language is said to have first class functions when functions in that language are treated
  like any other variable
   * So functions can be assigned to any other variable, or passed as an argument or can be returned by
   * another function
   */
//----Passing function as an argument to another function
	function log(a){
		//console.log(a);
		a();//Hello World
	}
	log(function(){
		console.log('Hello world');
})

	//----------------------Understanding function expressions------
	//Function expressions are not hoisted
	greet();//Hello World!
	function greet(){
		console.log('Hello World!');
	}
	console.log(greetA);//undefined
	console.log(greetA());//Type error
	var greetA = function(){
		console.log('Hello USA');
	}
greetA();