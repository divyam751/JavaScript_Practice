// let str = `He said you can't print "\`" inside backticks `;

// console.log(str);

let player1 = "Rahul";
let player2 = "Sachin";

// console.log(`player1 said "Happy Birthday" to player2`);
// console.log(`${player1} said "Happy Birthday" to ${player2}`);

// Q1

console.log('har"'.length);

// Q2
const str = "RAHUL";

console.log(str.startsWith("r"));
console.log(str.endsWith("L"));

// Q3

let str1 = "HI I AM Rahul";

console.log(str1.toLowerCase());

// Q4

let str3 = "Please give Rs 1000";

let amount = Number.parseInt(str3.slice(15));
console.log(amount);

// Q5

let name = "Sachin";
name[0] = "H";
console.log(name); // Strings are immutable but also not giving error.
