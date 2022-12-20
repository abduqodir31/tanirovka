"use strict";
let num = +prompt("son kiriting", "");
for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    const para = document.createElement("p");
    para.innerText = i + "-juft";
    document.body.appendChild(para);
    console.log(i, "juft");
  } else  {
    const para = document.createElement("p");
    para.innerText = i + "-toq";
    document.body.appendChild(para);
    console.log(i, "toq");
  }
}
