/* console.log("\n------------------------Time zones and other tricks-----------------\n");

let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

console.log(date2.getTimezoneOffset()); // -> 0
console.log(date2.toLocaleString()); // -> 01/01/1970, 10:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

date3 = new Date("2020-02-02T20:20:00.000");
date4 = new Date("2020-02-02T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000 */

console.log("\n---------------Current time-----------------\n");
//So always use Date to create an object (with the new operator).
/* let nowObj = new Date();
console.log(nowObj.toLocaleString()); */

let now = Date.now(); // timestamp
let nowObj = new Date(now);
console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj} : ${nowObj}`);
/* 
console.log("\n-----------Time specification with individual components---------\n");

let date1 = new Date(2020, 6);
let date2 = new Date(2020, 6, 8);
let date3 = new Date(2020, 6, 8, 10);
let date4 = new Date(2020, 6, 8, 10, 20, 45);
console.log(date1.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date2.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date3.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date4.toLocaleString()); // -> 08/07/2020, 10:20:45 */
/* 
console.log("\n-----------Time specification with date string---------\n");

let date1 = new Date("Mon Mar 02 2020 10:00:00");
let date2 = new Date("Mon March 2 2020 10:00");
let date3 = new Date("Mar 02 2020 10:00:00");
let date4 = new Date("2 March 2020, 10:");
let date5 = new Date("3.2.2020");
let date6 = Date("03/02-2020, 10:00");
let date7 = new Date("2020, 10:00");
let date8 = new Date("2020 march-02, 10:00");
let date9 = new Date("3.2.2020 GMT+0400");
let date10 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");
 */

/* console.log("\n-----------Practical use of a timestamp--------\n");
let date1 = new Date(2020, 6, 8, 10, 20, 0);
let date2 = new Date(2020, 6, 9, 10, 20, 0);
console.log(date2.getTime() - date1.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24

let startTime = Date.now();
for(i=0; i<10000000; i++){}
let endTime = Date.now();
console.log(endTime - startTime);
 */
console.log("\n-----------Operating on individual date and time components-------\n");
/* let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12 */

let date = new Date("2020-07-08T10:20:00");
console.log(date.toLocaleDateString()); // -> 08/07/2020
console.log(date.toLocaleTimeString()); // -> 10:20:00
