// for more information about the arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/* console.log("\n-----------------Creating an array---------------\n");

let array1 = []; // -> []
let array2 = [2, 4, "six"]; // -> [2, 4, "six"]
let array3 = new Array(); // -> []
let array4 = new Array(2); // -> [undefined, undefined]
let array5 = new Array(2, 4, "six"); // -> [2, 4, six]
let array6 = new Array("2"); // -> ["2"]
console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`); // -> array2 : object : true : 3
console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`); // -> array5 : object : true : 3

console.log(array2[0]); // -> 2
console.log(array5[2]); // -> "six"
console.log(array5[5]); // -> undefined */
/* 
console.log("\n-----------------Merging arrays---------------\n");

let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
let array3 = array1.concat(array2); // -> [10, 20, 30, "cat", "dog"];
console.log(array1.length); // -> 3
console.log(array2.length); // -> 2
console.log(array3.length); // -> 5
console.log(array3[0]); // -> 10
console.log(array3[3]); // -> "cat" */
/* 
console.log("\n------Adding and removing items – push and unshift------\n");
// This is done using the push (adding elements at the end of the array) and unshift (adding elements to the beginning of the array) method

let array1 = [10, 20, 30]; // -> [10, 20, 30]
array1.push(100); // -> [10, 20, 30, 100]
array1.push(50, "dog"); // -> [10, 20, 30, 100, 50, "dog"]
array1.unshift("cat", 90, 80); // -> ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]
console.info(array1)
 */
/* 
console.log("\n------Adding and removing items – pop and shift------\n");

//They are called without arguments, and each of them removes one element from the array (pop from the end of the array, shift from the beginning).

console.log(array1.length); // -> 9
console.log(array1.shift()); // -> cat
console.log(array1.length); // -> 8
console.log(array1.pop()); // -> dog
console.log(array1.length); // -> 7
console.info(array1)
 */
/* 
console.log("\n------Adding and removing items without using methodst------\n");

let array1 = [10, 20, 30]; // -> [10, 20, 30]
array1[3] = 100; // -> [10, 20, 30, 100]
array1[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]
delete array1[1]; // -> [10, undefined, 30, 100, undefined, 1000]
console.log(array1[1]); // -> undefined
 */

//console.log("\n------Walking through the array elements------\n");

//For-only
//let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
/* for(let index=0; index< array1.length; index++) {
    console.log(`${index} : ${array1[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
}
 */
//forEach

//array1.forEach( (item, index) => console.log(`${index} : ${item}`));


console.log("\n------The every and some methods------\n");
//every, checks whether all the elements of the array meet a certain condition we have given.
let array2 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array2.every(item => item > 0); // -> true


//some, is successful if at least one of the elements meets the condition
//Evolution #1
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let anyNumberPresent = array1.some( (item) => {
    if(typeof item === "number") {
        return true;
    } else {
        return false;
    }
}); // -> true
//Evolution #2
anyNumberPresent = array1.some( (item) => {
    return (typeof item === "number");
}); // -> true

//Evolution #3
anyNumberPresent = array1.some( item => typeof item === "number"); // -> true
