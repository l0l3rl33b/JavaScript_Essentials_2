//To indicate that a class inherits methods and properties from another class, we use the keyword extends.
//So the new class extends the definition of the old class (without modifying the base class, of course).
/*
class Vehicle { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.position = {latitude, longitude}; 
        this.status = "unavailable"; 
    };
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.longitude = longitude; 
        this.latitude = latitude; 
    };
    get position() { 
        return { 
            latitude: this.latitude, 
            longitude: this.longitude 
        }; 
    };
};

class Bus extends Vehicle {
    constructor({seats, id, latitude, longitude}) {
        super({id, latitude, longitude});
        this.seats = seats;
    }
}
let bus = new Bus({seats: 4, longitude: 18.213423, latitude: 59.367628, id: "AL1024"}); 
console.log(bus.seats); // -> 4
console.log(bus.id); // -> "AL1024"
*/
class AlmostEmptyClass { 
    constructor(sth) { 
        console.log(sth); 
    }; 
    sayHi() { 
        console.log("Hi!") 
    }; 
}; 
    class ExtendedClass extends AlmostEmptyClass {
        constructor(name) {
            super("I’m super ...");
            this.name = name;
        };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
    newHi() {
        this.sayHi();
    }
    oldHi() {
        super.sayHi();
    };
};
let obj = new ExtendedClass("Bob"); // -> I’m super ...
obj.sayHi();    // -> Hi Bob!
obj.newHi();    // -> Hi Bob!
obj.oldHi();    // Hi!