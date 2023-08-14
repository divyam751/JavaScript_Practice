let arr = [2, 3, 4, 3, 5, 6, 4];

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// Sort in ascending order
arr.sort();

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Sort in descending order

const comapare = (a, b) => {
  return b - a;
};
arr.sort(comapare);

console.log(arr);
