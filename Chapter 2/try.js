// Q1
let age = 15;
if (age > 10 && age < 20) {
  console.log("Yes");
} else {
  console.log("No");
}

// Q2

let n = 3;

switch (n) {
  case 1:
    console.log("Player 1 win");
    break;
  case 2:
    console.log("Player 2 win");
    break;
  case 3:
    console.log("Player 3 win");
    break;
  default:
    console.log("Game Draw");
}
// Q3

const number = 9;

if (number % 2 == 0 && number % 3 == 0) {
  console.log("True");
} else {
  console.log("False");
}

// Q4
const num = 9;

if (num % 2 == 0 || num % 3 == 0) {
  console.log("True");
} else {
  console.log("False");
}

// 5

const driverAge = 19;

console.log("You can " + (driverAge > 18 ? "Drive" : "can not Drive"));
