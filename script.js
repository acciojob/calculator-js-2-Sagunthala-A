let div = document.createElement("div");
document.body.append(div);
div.setAttribute("id", "display");
let answer = document.createElement("div");
div.append(answer);
answer.setAttribute("id", "answer");

// let arr = ['+','-','/','*','(',')','C','back',]
// let boxesID = ['plus','-','divi','*','op','cl','C','divi','equal'];
let boxesId = [
  "C",
  "divi",
  "*",
  "back",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "plus",
  "1",
  "2",
  "3",
  ".",
  "op",
  "0",
  "cl",
  "equal",
];
let boxesName = [
  "C",
  "/",
  "*",
  "<-",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  ".",
  "(",
  "0",
  ")",
  "=",
];

for (let i = 0; i < 20; i++) {
  let smallDiv = document.createElement("div");
  div.append(smallDiv);
  smallDiv.setAttribute("id", `${boxesId[i]}`);
  smallDiv.innerText = `${boxesName[i]}`;
  console.log(smallDiv);
}

console.log(div);
