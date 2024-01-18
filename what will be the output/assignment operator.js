(function(){
    var a = b = 3;
})();
  
  console.log("a defined? " + (typeof a !== 'undefined')); //false
  console.log("b defined? " + (typeof b !== 'undefined')); //true

  /**
    var a = b = 3; is actually shorthand for:
    b = 3;
    var a = b;
   */