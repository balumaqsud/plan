const adviceList = [
  "Keep learning every single day", //0-20
  "Stay focused on your goals", //20-30
  "Take breaks to avoid burnout", //30-40
  "Practice makes everything much better", //40-50
  "Ask questions and seek help", //50-60
  "Never fear making small mistakes", //60 -
];

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
// giveAdvice(65, (err, data) => {
//   if (err) console.log("error:", err);
//   else {
//     console.log("answer:", data);
//   }
// });
// console.log("----------------2");

// async function giveAsyncAdvice(age) {
//   if (typeof age !== "number") throw new Error("insert number");
//   else if (age <= 20) return adviceList[0];
//   else if (age > 20 && age <= 30) return adviceList[1];
//   else if (age > 30 && age <= 40) return adviceList[2];
//   else if (age > 40 && age <= 50) return adviceList[3];
//   else if (age > 50 && age <= 60) return adviceList[4];
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

// /////// with await to escape callback hell
// async function giveAnswer() {
//   let answer = await giveAsyncAdvice(20);
//   console.log("with await: ", answer);
//   answer = await giveAsyncAdvice(90);
//   console.log("with await: ", answer);
//   answer = await giveAsyncAdvice(40);
//   console.log("with await: ", answer);
//   answer = await giveAsyncAdvice(50);
//   console.log("with await: ", answer);
//   answer = await giveAsyncAdvice(60);
//   console.log("with await: ", answer);
// }
// giveAnswer();

// ////// set Interval with callback, qaconki qiymat qaytsa, qaytaraveradi
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
// Promise: An object that represents the eventual result of an asynchronous operation, allowing .then() and .catch() chaining.
//Async/Await: A cleaner way to work with Promises, where await pauses execution until the Promise resolves.
