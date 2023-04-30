/**
 * Q: If you want to use an arbitrary object as value of this, how will you do that?
 * A:There are at least three different ways to doing this by using bind, call and apply.
 * 
 * Ex: For example, I have a method named deductMontlyFee in the object monica and by default value of this 
 * would be monica inside the method.
 */

const monica = {
    name: 'Monica Geller',
    total: 2000,
    deductMontlyFee: function(fee){
        this.total-= fee;
        return `${this.name} remaining balance is ${this.total}`;
    }
}

/**
 * If I bind the deductMontlyFee of monica with another object rachel and pass rachel as first parameter 
 * of the bind function, rachel would be the value of this.
 * bind allows you to borrow a method and set the value of this without calling the function. 
 * It simply returns an exact copy of the function with new value of this. 
 * You can reuse the same function with new value of this without harming the old one.
 */
var rachel = {
    name: 'Rachel Green',
    total: 1000
}
var rachelFeeDeductor = monica.deductMontlyFee.bind(rachel, 100);
console.log(rachelFeeDeductor());

var ross = {
    name:'Ross Geller', 
    total:250
};
var rossFeeDeductor = monica.deductMontlyFee.bind(ross, 25);
console.log(rossFeeDeductor());

/**
 *  If an older browser dont have bind function, how will you shim it
 */

Function.prototype.bind = Function.prototype.bind || function(context){
    const self = this;
    return function(){
        return self.apply(context, arguments);
    }
}

