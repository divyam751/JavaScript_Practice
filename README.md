# JavaScript_Practice :P

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

### These functions will not alter original array

# Map

```javascript
let arr = [1, 4, 3, 6, 8, 4];

// Map will return a new array

let new_arr = arr.map((ele, index) => {
  return ele + index;
});

console.log(new_arr);
```

# Filter

```javascript
//  It will also return a new array;
let arr = [1, 4, 3, 6, 8, 4];

let elements = arr.filter((ele) => {
  return ele < 5;
});

console.log(elements);
```

# Reduce

```javscript


let arr = [1, 3, 4, 5, 3];

let sum = arr.reduce((var1, var2) => {
  return var1 + var2;
});

console.log(sum);
```
