figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
/* 
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
}; */
/* circle.__proto__ = figure;
console.log(figure.getType());
console.log(circle.getType());

Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType()); */
/* 
Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType()); */

let circle = Object.create(figure)
circle.type = "circle";
circle.center = {x:0, y:0},
circle.radius = 100;
console.log(circle.getType());
