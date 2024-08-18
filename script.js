let div = document.createElement("div");
document.body.append(div);
div.setAttribute('id', 'display');

// let arr = ['+','-','/','*','(',')','C','back',]
let boxesID = ['plus','-','divi','*','op','cl','C','back','equal'];
let boxesName = ['C','/','*','<-',
				 '7','8','9','-',
				 '4','5','6','+',
				 '1','2','3','.',
					'(','0',')','='
				]
let boxesName = ['C','/','*','<-','7','8','9','-','4','5','6','+','1','2','3','.',
					'(','0',')','='
				]

for (let i = 1; i <= 20; i++) {
  let smallDiv = document.createElement("div");
  div.append(smallDiv);
  smallDiv.setAttribute("class", `boxes box-${i}`);
  console.log(smallDiv);
}

console.log(div);