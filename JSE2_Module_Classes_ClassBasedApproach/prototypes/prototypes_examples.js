let point = {x:0, y:0};
let coloredPoint = {color: "red"};

/* coloredPoint.__proto__ = point; */

/* Note   In normal programming, we absolutely do not use __proto__. 
Direct use of this field is considered obsolete, withdrawn from the standards, slow. 
Here, we use it only to learn the basics of prototyping step by step. */

/* console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x); */



/* coloredPoint.x = 100;   // new property
console.log(coloredPoint.x);
console.log(point.x);
console.log(Object.getOwnPropertyNames(coloredPoint));

point.y = 200;
console.log(coloredPoint.y);
console.log(point.y);

point.x = 150;
console.log(coloredPoint.__proto__.x);
console.log(point.x); */


