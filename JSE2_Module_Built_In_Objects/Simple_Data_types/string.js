//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/* let delay = 10;
let name = "Bob";
let order = 'pizza';
let info = `Hi ${name}, you have to wait about ${delay} minutes for your ${order}`;
console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza
console.log(typeof name); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string
 */
/* let anotherInfo = "Hi " + name + ", you have to wait about " + delay + " minutes for your " + order;

let warn2 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn1 = 'Confirm ticket reservation for "Alien 10" movie.';
warn2 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn3 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`; */

//console.log("-------------------The String constructor----------------");
// length property
/* let name = "Bob";
console.log(name.length); // -> 3
console.log("Alice".length ); // -> 5
console.log("".length ); // -> 0
 */
//Use a validation along to the length property

/* let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
} */

/* console.log("---------String as an array of characters--------");
let title = "Alien 10";
console.log(title[0]); // -> A
console.log(title.charAt(0)); // -> A */

/* console.log("------------------Case conversion-----------------");

let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127 */

/* console.log("---------- Replacing substrings -------------");

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
console.log(text.length);
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30
console.log(words); */

/* console.log("-----------Searching for substrings----------");

let text = "One, two, three, one, two, three.";
console.log(text.includes("two")); // -> true
console.log(text.includes("four")); // -> false
console.log(text.indexOf("two")); // -> 5
console.log(text.indexOf("four")); // -> -1
console.log(text.lastIndexOf("two")); // -> 22 */

/* console.log("---------------Copying substrings---------------");

let text = "One, two, three, one, two, three.";
console.log(text.substr(0,8)); // -> One, two
console.log(text.substr(10)); // -> three, one, two, three.
console.log(text.substr(-6)); // -> three.
console.log(text.substr(-6, 2)); // -> th
console.log(text.substring(5, 8)); // -> two
console.log(text.substring(5)); // -> two, three, one, two, three.
console.log(text.substring(-11, 8)); // -> One, two

console.log(text.slice(0,3)); // -> One
console.log(text.slice(5)); // -> two, three, one, two, three.
console.log(text.slice(-11)); // -> two, three.
console.log(text.slice(-11, -8)); // -> two
 */

/* console.log("----------Padding---------");

//They allow you to expand the string to a given size, completing it from the end or from the beginning by repeating the string given as an argument.
//The first argument is the maximum length of the output string, the the second argument is the padding.
//If we omit the second argument, the spaces will be used for completion by default.
let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}
 */

console.log("---------Trimming----------");
//They remove whitespace characters (e.g. tabs, spaces, newline characters).

let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimStart().length); // -> 8 -> "Bergen  "
console.log(city.trimEnd().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim().length); // -> 10 -> "Dokkeboder"


console.log("-------------Comparing strings------")
console.log("a" < "b"); // -> true
console.log("abc" < "acd"); // -> true
console.log("b" < "acd"); // -> false
console.log("4" < "5"); // -> true
console.log("2" < "12"); // -> false
console.log("34" < "332"); // -> true

console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true
console.log("Ørnes" < "Sundsfjord"); // -> false
