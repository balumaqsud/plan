//task -g
const reverse = (numsArr) => {
  let curr = 0;
  for (let i = 0; i < numsArr.length; i++) {
    if (curr < numsArr[i]) {
      curr = numsArr[i];
    }
  }
  return numsArr.indexOf(curr);
};

console.log(reverse([3, 55, 6, 99, 120, 9, 44]));

// //task -e
// const reverse = (s) => {
//   return s.split("").reverse().join("");
// };
// console.log(reverse("hello"));

// const moment = require("moment");
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.prodcuts = { non, lagmon, cola };
//     this.now = moment().format("hh:mm a");
//   }
//   //methods
//   sell(product_name, product_count) {
//     if (product_count > this.prodcuts[product_name]) {
//       console.log(`we do not have ${product_count} of ${product_name}`);
//     } else {
//       this.prodcuts[product_name] -= product_count;
//       console.log(`At ${this.now} we sell ${product_count} of ${product_name}`);
//     }
//   }
//   recieve(product_name, product_count) {
//     this.prodcuts[product_name] += product_count;
//     console.log(
//       `At ${this.now} we recived ${product_count} of ${product_name}`
//     );
//   }
//   remainder() {
//     console.log(
//       `At ${this.now}, We have ${this.prodcuts["non"]}ta non, ${this.prodcuts["lagmon"]} lagmon , ${this.prodcuts["cola"]} cola!`
//     );
//   }
// }

// const shop = new Shop(10, 10, 10);
// shop.recieve("lagmon", 10);
// shop.remainder();
// shop.sell("lagmon", 19);
// shop.remainder();

// //C - task;
// const checkTwoWords = (str1, str2) => {
//   let count = 0;
//   const arr1 = str1.split("").sort();
//   const arr2 = str2.split("").sort();

//   for (let i = 0; i < str1.length; i++) {
//     count++;

//     if (arr1.length === arr2.length && arr1[count] === arr2[count]) {
//       return true;
//     }

//     return false;
//   }
// };
// //call
// console.log(checkTwoWords("balu", "ulab"));

// //B-TASK:
let count = 0;
const countDigits = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i])) {
      count++;
    }
    if (string[i] == "0") {
      count++;
    }
  }
  console.log(count);
};
countDigits("ad2a54y79wet0sfg102b9");

// //A-TASK:
// // example countLetter("e", "engineer");

// let count = 0;
// const letterCounter = (target, string) => {
//   for (let i = 0; i < string.length; i++) {
//     if (target === string[i]) {
//       count++;
//     }
//   }
//   console.log("count:", count);
//   return count;
// };

// letterCounter("l", "Ollobergan Abdulla Maksud Ugli");

// //////////////////////////////////
// const adviceList = [
//   "Keep learning every single day", //0-20
//   "Stay focused on your goals", //20-30
//   "Take breaks to avoid burnout", //30-40
//   "Practice makes everything much better", //40-50
//   "Ask questions and seek help", //50-60
//   "Never fear making small mistakes", //60 -
// ];

// function giveAdvice(age, callback) {
//   if (typeof age !== "number") callback("insert number", null);
//   else if (age <= 20) callback(null, adviceList[0]);
//   else if (age > 20 && age <= 30) callback(null, adviceList[1]);
//   else if (age > 30 && age <= 40) callback(null, adviceList[2]);
//   else if (age > 40 && age <= 50) callback(null, adviceList[3]);
//   else if (age > 50 && age <= 60) callback(null, adviceList[4]);
//   else {
//     setTimeout(function () {
//       callback(null, adviceList[5]);
//     }, 5000);
//   }
// }

// console.log("----------------1");
// giveAdvice(45, (err, data) => {
//   if (err) console.log("error:", err);
//   else {
//     console.log("answer:", data);
//   }
// });
// // console.log("----------------2");

// async function giveAsyncAdvice(age) {
//   if (typeof age !== "number") throw new Error("insert number");
//   else if (age <= 20) return adviceList[0];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(adviceList[5]);
//       }, 5000);
//     });
//   }
// }

// //////call with then() and catch()
// console.log("----------------1");
// giveAsyncAdvice(25)
//   .then((data) => console.log("async answer:", data))
//   .catch((err) => err);
// console.log("----------------2");

// // /////// with await to escape callback hell
// async function giveAnswer() {
//   let answer = await giveAsyncAdvice(20);
//   console.log("with await: ", answer);
//   answer = await giveAsyncAdvice(90);
//   console.log("with await: ", answer);
//   answer = await giveAsyncAdvice(40);
// }
// giveAnswer();

//////// set Interval with callback, qaconki qiymat qaytsa, qaytaraveradi

// function giveAdvice(age, callback) {
//   if (typeof age !== "number") callback("insert number", null);
//   else if (age <= 20) callback(null, adviceList[0]);
//   else if (age > 20 && age <= 30) callback(null, adviceList[1]);
//   else if (age > 30 && age <= 40) callback(null, adviceList[2]);
//   else if (age > 40 && age <= 50) callback(null, adviceList[3]);
//   else if (age > 50 && age <= 60) callback(null, adviceList[4]);
//   else {
//     setInterval(function () {
//       callback(null, adviceList[5]);
//     }, 1000);
//   }
// }

// console.log("----------------1");
// giveAdvice(65, (err, data) => {
//   if (err) console.log("error:", err);
//   else {
//     console.log("answer:", data);
//   }
// });
// console.log("----------------2");

// Callback: A function passed as an argument to another function and executed later (e.g., in setTimeout or event listeners).
// Promise: An object that represents the eventual result
// of an asynchronous operation, allowing .then() and .catch() chaining.
// A Promise as a function means returning a Promise inside a function, allowing asynchronous operations.
//Async/Await: A cleaner way to work with Promises, where await pauses execution until the Promise resolves.
