/**
 * Object.create() creates a new object, using an existing object as the prototype of the newly created object.
 * 
 * Syntax: Object.create(proto)
 *          Object.create(proto, propertiesObject)
 * proto: The object which should be the prototype of the newly created object.
 * propertiesObject: an object whose enumerable own properties specify property descriptors to be added to the newly-created object
 */

/**
 *  Look at the code below, I have a property in a object and I am creating a new object where I am setting it 
 * to a new value. If I delete that property what will i get if I try to access that property?
 * 
 * Ans: When you create object.create(myObject) you are creating new object where the myObject will be the parent 
 * of the newly created object. Hence the price property will be at the parent.
 * When you are assigning some value to customObject.price, you are creating a new property on the child. 
 * This means, when you delete customObject.price it deletes the price property in the customObject (in the child). 
 * However, when you call the method getprice, first it looks for this.price in the child since the customObject 
 * doesn't have price property, JavaScript executor walks through the prototype chain towards the parent. 
 * Since customObject was inherited from myObject and myObject has a price property, the getPrice method returns 
 * the price from parent. Hence, you are getting 200
 */

const myObject = {
    price: 200,
    getPrice:function(){
        return this.price;
    }
}

var customObj = Object.create(myObject);
customObj.price = 100;

delete customObj.price;
console.log(customObj.getPrice());//200

