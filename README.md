# JavaScript_Practice

# Loops

- for loop

```javascript
let num = [1, 4, 2, 7, 8, 5];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
```

- forEach Loop

```javascript
// print square of each number
let num = [1, 4, 2, 7, 8, 5];

num.forEach((ele) => {
  console.log(ele * ele);
});
```

- for of loop

```javascript
let num = [1, 4, 2, 7, 8, 5];

for (let i of num) {
  console.log(i);
}
```

- for in loop

```javascript
let num = [1, 4, 2, 7, 8, 5];

for (let i in num) {
  console.log(i);
  //   that will print only keys like  0,1,2,3,4,5
}
```
