// let arr = [2, 3, 4, 3, 5, 6, 4];

// for (let i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
// }

// // Sort in ascending order
// arr.sort();

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // Sort in descending order

// const comapare = (a, b) => {
//   return b - a;
// };
// arr.sort(comapare);

// // console.log(arr);

// // MAP will create a new array

// let arr2 = [2, 3, 4, 3, 5, 6, 4];

// arr2.map((ele, index) => {
//   console.log(ele + 1, index);
// });

// //  filter

// let sorted_ele = arr2.filter((ele) => {
//   return ele < 5;
// });
// console.log(sorted_ele);

// // Reduce

// let arr = [1, 3, 4, 5, 3];

// let sum = arr.reduce((var1, var2) => {
//   return var1 + var2;
// });

// console.log(sum);

//=================
//Q1
// When we need to add number in each element of an array.
// let user_input = 2; // input from the user

// let arr = [1, 2, 4, 3, 6];

// let res = arr.map((ele) => {
//   return ele + user_input;
// });
// console.log(res);

// =============== Here I will add number in array.not in it's elements
// let user_input1=20;
// let arr = [1, 2, 4, 3, 6];
// arr.push(user_input1=20);
// console.log(arr);

// Q2
// let arr2 = [1, 2, 4, 3, 6];
// let num;
// do {
//   num = prompt("Enter a number");
//   num = Number.parseInt(num);

//   arr2.push(a);
// } while (num != 0);
// console.log(arr2);

// // Q3
// let Q3 = [10, 40, 23, 54, 60, 80, 98];

// let res3 = Q3.filter((ele) => {
//   return ele % 10 == 0;
// });

// console.log(res3);

// // Q4
// let arr4 = [2, 3, 4, 3, 5, 6, 4];

// let res4 = arr4.map((ele) => {
//   return ele * ele;
// });
// console.log(res4);

// Q5

// let n = 6;
// let arr5 = [];

// for (let i = 0; i < n; i++) {
//   arr5[i] = i + 1;
// }

// let fact = arr5.reduce((a, b) => {
//   return a * b;
// });
// console.log(fact);
