// Q3
const google = () => {
  window.location = "https://google.com";
};

document.getElementById("google").addEventListener("click", google);

const twitter = () => {
  window.location = "https://twitter.com";
};

document.getElementById("twitter").addEventListener("click", twitter);

const facebook = () => {
  window.location = "https://facebook.com";
};

document.getElementById("facebook").addEventListener("click", facebook);

// Q4

// async function fetchdata(URL) {
//   const res = await fetch(URL);
//   const data = await res.json();
//   console.log(data);
// }

// setInterval(async () => {
//   const URL = "https://jsonplaceholder.typicode.com/todos/1";
//   await fetchdata(URL);
// }, 5000);

setInterval(async () => {
  document.getElementById("BOX1").classList.toggle("color");
  document.getElementById("BOX2").classList.toggle("color");
}, 1500);
