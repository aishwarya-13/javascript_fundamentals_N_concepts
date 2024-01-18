var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);//bar
        console.log("outer func:  self.foo = " + self.foo);//bar
        console.log("outer func:  this = " + this);//myObject
        console.log("outer func:  self = " + self);//myObject

        //In arrow function this resolves lexically
        (()=>{
            console.log("inner func:  this.foo = " + this.foo);//bar
            console.log("inner func:  self.foo = " + self.foo);//bar
            console.log("inner func:  this = " + this);//myObject
            console.log("inner func:  self = " + self);//myObject
        })()

        //In regular functin this depends on how the function is invoked
        // (function() {
        //     console.log("inner func:  this.foo = " + this.foo);//undefined
        //     console.log("inner func:  self.foo = " + self.foo);//bar
        //     console.log("inner func:  this = " + this);//window
        //     console.log("inner func:  self = " + self);//myObject
        // }());
    }
};
myObject.func();