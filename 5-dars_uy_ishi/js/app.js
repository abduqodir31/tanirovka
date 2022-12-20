"use strict";
let a;
let b;
let c;
function funOfnum(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    a = "3 ga va 5 ga bo'linadi";
  } else if (num % 3 == 0) {
    b = "3 ga bo'linadi";
  } else if (num % 5 == 0) {
    c = "5 ga bo'linadi";
  }
}
console.log(funOfnum(+prompt("son kriting")));
if (a === undefined) {
  a = "";
}
if (b === undefined) {
  b = "";
}
if (c === undefined) {
  c = "";
}

document.getElementById("text").innerHTml = a;
document.getElementById("text1").innerHTml = b;
document.getElementById("text2").innerHTml = c;
