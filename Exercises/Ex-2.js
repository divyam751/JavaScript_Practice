// ============ Snake Water Gun  ==========
// Snake - Water   1-0
// Water - Gun    1-0
// Gun  - Snake   1-0

let userCount = 0;
let compCount = 0;
let n = 5;
while (n-- > 0) {
  let random = Math.floor(Math.random() * 3);
  let game = ["Sanke", "Water", "Gun"];

  let comp = game[random];
  let user = prompt(`Enter one from these "Sanke","Water","Gun"`);

  if (comp == "Snake" && user == "Water") {
    compCount++;
  }
  if (comp == "Snake" && user == "Gun") {
    userCount++;
  }
  if (comp == "Water" && user == "Snake") {
    compCount++;
  }
  if (comp == "Water" && user == "Gun") {
    userCount++;
  }
  if (comp == "Gun" && user == "Snake") {
    compCount++;
  }
  if (comp == "Gun" && user == "Water") {
    userCount++;
  }
}
let winner = compCount > userCount ? "Computer Wins" : "User Wins";
alert(winner);
