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

/* 
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
 */
/* 
console.log("\n------Filterings------\n");

//The filter method copies all elements that have passed our test and returns them as a new array.
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array1.length); // -> 9
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers.length); // -> 7
console.log(array1.length); // -> 9
 */

/* 
console.log("\n------Mapping elements------\n");

//we first use the filter method to copy only the elements that are numbers from array1.
//It’s only in the next step that we call the map method, using method chaining.
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array1.filter(item => typeof item === "number").map(item => item*item); // -> [8100, 6400, 100, 400, 900, 10000, 2500]
console.info(squarePower);
 */
/* 
console.log("\n------Sorting------\n");

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers[0]);
numbers.sort((first, second) => {
    if( first < second) {
        return -1
    } else if(first == second) {
        return 0;
    } else {
        return 1;
    }
}); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]);
 */
/* 
console.log("\n------Reducing the array------\n");

let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
let sum = numbers.reduce((accumulator, item) => accumulator + item);
console.log(sum); // -> 380

let anotherSum = numbers.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // -> 1380

let strangeObj = numbers.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
} , {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}
 */
/* 
console.log("\n------Reversing the order of the elements------\n");

//This method allows you to reverse the order of the array elements, while it works in place (we modify the original array).
let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10
numbers.reverse(); // -> [100, 90, 80, 50, 30, 20, 10]
console.log(numbers[0]); // -> 100
numbers.reverse(); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10
 */

//console.log("\n------Looking for an element------\n");
/* 
The include method returns true if the item is located (otherwise it returns false).

The indexOf method returns the index (that is, the position) of the first element found in the array with the value we are looking for, or -1 if we fail.

In case of this method, we start the search from the left side of the array (i.e. from the beginning).

The lastIndexOf method works similarly, the only difference being that the search starts from the right side (from the end of the array).
 */
/* 
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.includes("shark")); // -> true 
console.log(myPets.includes("unicorn")); // -> false
console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6
console.log(myPets.indexOf("unicorn")); // -> -1
 */
/* 
The find method returns the value if we find an item that meets our condition, and undefined if it does not.

The findIndex method will return the index of the found element if successful, or -1 if unsuccessful.
 */

/* 
console.log(myPets.find(item => item.length > 3)); // -> hamster
console.log(myPets.find(item => item.includes("og"))); // -> dog
console.log(myPets.find(item => item.includes("fish"))); // -> undefined
console.log(myPets.findIndex(item => item.length > 3)); // -> 2
console.log(myPets.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets.findIndex(item => item.includes("fish"))); // -> -1
 */
/* 
console.log("\n------Copying a selected part of the array------\n");

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPets.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPets.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPets.slice(-3, -1); // -> ["shark", "cat"]
 */

console.log("\n------Deleting and replacing a selected part of the array------\n");

//splice, works for a change in place, and modifies the original array.
//What is important is that the method returns the deleted elements (e.g. we can store them in a variable or, as in the example, display them).
/* 
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets.splice(2, 3); 
console.log(myPets); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]
 */
//The splice method can also be used to insert new elements into the array.
//If we don’t want to delete anything, then we give 0 as the second argument.
//For any subsequent arguments, we give the values to be located in a specified place of the array.
//Therefore, we can call splice to simultaneously remove several selected elements and insert new ones in their place, or we can add new ones from the indicated index without removing the existing ones.
/* 
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets); // -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]
 */

//console.log("\n------The destructuring assignmenty------\n");
//We learned about the destructuring assignment when looking at objects.
/* 
let myPets = ["cat", "dog", "hamster", "canary"];
let pet1 = myPets[0];
let pet3 = myPets[2];
let pet4 = myPets[3];
console.log(pet1); // -> cat
console.log(pet3); // -> hamster
 */
//We have assigned selected elements from the myPets array to the variables pet1, pet2, and pet3. The same effect can be achieved by using a destructive assignment.
/* 
let [pet1, , pet3, pet4] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> hamster
 */
//If we don't want to copy any of the array items, we can mark it by leaving a blank field separated by commas.
/* 
let myPets = ["cat", "dog"];
let [pet1, , pet3] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> undefined
 */
//The destructuring assignment allows us to prepare default values, which will be used if there is no element in the array (otherwise the default value is ignored).
/* 
let myPets = ["cat", "dog"];
let [pet1 = "fish", , pet3 = "fish"] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> fish
 */

//console.log("\n------The spread operator in arrays------\n");
//An equally useful technique is the use of the spread operator (i.e. three dots).

//It allows the spread of the array into individual elements where a list of elements or arguments is expected.

//The simplest example is to use elements of an existing array to create a new one.
/* 
let array1 = [100, 200, 300];
let array2 = [1000, 2000];
let array3 = [10, 20, ...array1, 500, ...array2]; //-> [10, 20, 100, 200, 300, 500, 1000, 2000]
 */
//The operator can also be used to spread the array over the elements while passing them on as arguments of the function.
/* 
let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.log(testFn(...array)); // -> 100
 */
/* 
console.log("\n------Set------\n");

//The Set constructor is used to create a collection of unique elements.
//Elements of the same value cannot appear in a collection of this type.
//Additionally, the same elements could appear in the array in different positions.
//Formally, each element of the set collection consists of a key and a value.

//The constructor can accept the array as an argument.

let emptySet = new Set(); // -> {}
console.log(emptySet.size); // -> 0
let petsSet = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSet.size); // -> 2
console.log(petsSet.has("cat")); // -> true
console.log(petsSet.has("shark")); // -> false 

petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); // -> 4
console.log(petsSet.has("shark")); // -> true
petsSet.delete("dog"); // -> true
petsSet.delete("dog"); // -> false
console.log(petsSet.size); // -> 3
petsSet.clear();
console.log(petsSet.size); // -> 0

let petsSet2 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
petsSet2.forEach(value => console.log(value)); // -> cat -> dog -> hamster

//In this example, we use the fact that we know the number of items in the collection and how many times we call the next method of our petsIterator iterator.
let petsSet3 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator = petsSet3.values();
console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster

let petsIterator2 = petsSet.values();
let result = petsIterator2.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator2.next();
}

let petsSet4 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
console.log(petsSet4 instanceof Set); // -> true
let petsArray = [...petsSet4]; // -> ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // -> true
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
/* 
console.log("\n------Map------\n");

//The next constructor we will discuss, Map, is also used to create a collection of elements.
//In this case, each element of this collection consists of a different key:value pair.

let emptyMap = new Map();
let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(emptyMap.size); // -> 0
console.log(petsMap.size); // -> 3
console.log(petsMap.has("dogs")); // -> true
console.log(petsMap.has("sharks")); // -> false
console.log(petsMap.has(1)); // -> false 

console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0
petsMap.set(2,2);
console.log(petsMap.has(2));

let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`)); // -> snakes : 1 -> cats : 3 -> dogs : 2

let petValuesIterator = anotherPetsMap.values();
console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2

let petKeysIterator = anotherPetsMap.keys();
console.log(petKeysIterator.next().value); // -> snakes
console.log(petKeysIterator.next().value); // -> cats
console.log(petKeysIterator.next().value); // -> dogs

let petValuesIterator2 = anotherPetsMap.entries();
console.log(petValuesIterator2.next().value); // -> [ 'snakes', 1 ]
console.log(petValuesIterator2.next().value); // -> [ 'cats', 3 ]
console.log(petValuesIterator2.next().value); // -> [ 'dogs', 2 ]

let petsIterator = anotherPetsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 result = petsIterator.next();
}
 */
/* 
console.log("\n------The for ... of loop------\n");

let petsArray = ["cat", "dog", "hamster"];
for( let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsSet = new Set(["cat", "dog", "hamster"]);
for( let pet of petsSet) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for( let pet of petsMap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> cats -> dogs -> hamsters
}
 */
/* 
console.log("\n------The spread operator in maps------\n");

let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMap instanceof Map); // -> true
let petsArray = [...petsMap]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArray instanceof Array); // -> true
 */

console.log("\n------Object------\n");

let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
console.log(anotherPetsObj.snakes); // -> 1
anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2
delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined
anotherPetsObj.snakes = 0;
console.log(anotherPetsObj.snakes); // 0

Object.keys(anotherPetsObj).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObj).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObj).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]


for (let key in anotherPetsObj) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}

let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}
