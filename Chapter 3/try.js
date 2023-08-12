// // // Factorial program

// // const fact = 6;
// // let res = 1;
// // for (let i = 1; i <= fact; i++) {
// //   res *= i;
// // }
// // console.log("Factorial of " + fact + " is " + res);

// // For in loop in JS it's use for getting value in an object

// const obj = {
//   Name: "Aman",
//   Class: 7,
//   Marks: {
//     Math: 5,
//     English: 5,
//     Computer: 9,
//   },
// };
// let sum = 0;
// for (let a in obj.Marks) {
//   sum += obj.Marks[a];
// }
// console.log(sum);

// // For OF loop

// for (let a of "DIVYAM") {
//   console.log(a);
// }

// ========== PS

// Q1

const obj = {
  harry: 98,
  rohan: 70,
  aaksh: 7,
};
// const name = Object.keys(obj);

// for (let i = 0; i < name.length; i++) {
//   console.log(obj[name[i]]);
// }

// Q2

// for (let i in obj) {
//   console.log(obj[i]);
// }

// Q3

// let n = 7;
// let x = 0;
// while (x != n) {
// alert("Try Again");
//   x = prompt("Enter one Number");
// }

// Q4

let arr = [2, 3, 5, 6, 3];
let sum = 0;

function mean_v(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let mean = mean_v(arr, sum);
console.log(mean);

// add  two number with function

const add = (a, b) => {
  return a + b;
};

let res = add(5, 6);
console.log(res);
