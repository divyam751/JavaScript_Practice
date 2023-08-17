// console.log("Date : " + a);
setInterval(() => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();

  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h < 10) {
    h = "0" + h;
  }
  console.log("Time : " + h + " : " + m + " : " + s);
}, 1000);
