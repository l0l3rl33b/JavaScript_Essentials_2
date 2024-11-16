/* let a = 10; // decimal - default
let b = 0x10;   // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999
console.log((x + y).toFixed(1));    // -> 0.9
console.log(x / 0);      // -> Infinity
console.log(x / "abc");  // -> NaN */

console.log("\n-------------------The Number constructors --------------------\n")
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

let nrStr1 = (11).toString();
let nrStr2 = (11).toString(16);
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr1 : string : b

//this example is strictly didactic (we should not use Number in this way).

/* let numberObj1 = new Number;            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = new Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0
 */

/* let nr = Number("100");
console.log(`nr : ${typeof nr} : ${ nr}`); // -> nr : number : 100
let numberObj1 =  Number;            // -> function Number() { [native code] }
let numberObj2 =  Number(100);       // -> 100
let numberObj3 =  Number("200");     // -> 200
let numberObj4 =  Number("abcd");    // -> NaN
let numberObj5 =  Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : function : function Number() { [native code] }
console.log(`numberObj2 : ${typeof numberObj2} : ${ numberObj2.valueOf()}`); // -> numberObj1 : number : 100
console.log(`numberObj3 : ${typeof numberObj3} : ${ numberObj3.valueOf()}`); // -> numberObj1 : number : 200
console.log(`numberObj4 : ${typeof numberObj4} : ${ numberObj4.valueOf()}`); // -> numberObj1 : number : NaN
console.log(`numberObj5 : ${typeof numberObj5} : ${ numberObj5.valueOf()}`); // -> numberObj1 : number : Infinity */


console.log("\n-----------Converting numbers into different string formats----------\n")

//toExponential(fractionDigits)
//Returns a string representing a number in exponential form, with one digit before the comma, rounded to fractionDigits after the comma.
let a = 12345;
console.log(a.toExponential());   // -> 1.2345e+4
console.log(a.toExponential(1));  // -> 1.2e+4

//toLocaleString
//This methods is hihgly used to follow the local rules for how the numbers should be represented in those regions/countries

let nr = 123456.789;
console.log(nr.toLocaleString("en-GB")); //-> 123,456.789
console.log(nr.toLocaleString("fr-FR")); //-> 123·456,789
console.log(nr.toLocaleString("de-DE")); //-> 123.456,789
console.log(nr.toLocaleString("ar-EG")); //-> ١٢٣٬٤٥٦٫٧٨٩
console.log(nr.toLocaleString("es-ES"));
/*     style: "currency",
    currency: "EUR"
})); //-> 123.456,79 € */
console.log(nr.toLocaleString());

console.log("Static properties and methods of the Number constructor")
//Among the more important properties, we find MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER and MIN_SAFE_INTEGER. for the Number constructor

console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; i < numbers.length; i++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);

}
