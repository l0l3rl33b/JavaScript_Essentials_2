// CONSTRUCTOR EXAMPLES

/* let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;

let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;
let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);

let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;
let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});
console.log(circle1.getType());
console.log(triangle1.getType());

Circle.prototype.hi = function(){console.log("Hi!")};

triangle1.hi(); */

/* 
let testString = new String("unu doi trei");
console.log(testString.length);

String.prototype.hi = function(){console.log("Hi!")};
String.hi() */
let getCar = (make, model) => (make, model);
let car = getCar('Dodge', 'Viper');
console.log(`${car.make} ${car.model}`);

