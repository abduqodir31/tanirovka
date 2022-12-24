let mathematics = {
  12: 13,
  name1: "Algebra",
  1: 2,
  odamlaNimaDeydi: "false",
  3: "22",
  fizika: "Bomagan narsa",
  2: 3,
  5: "salom",
  99: 0,
};

let count = 0;
let countVal = 0;
for (const key in mathematics) {
  if (+key + 1 && typeof mathematics[key] === "number") {
    count += +key;
    countVal += mathematics[key];
  }
}
console.log("Keylar:", count, "Valuelari:", countVal);

// const mashina = {                                                              (moshina haqida)
//  car : prompt("mashinanig rusumi kiriting"),
//  rangi : prompt(" rangini kiriting"),
//  holat : prompt(" holati  kiriting"),
//  narxi : prompt(" narxini kiriting"),
//  speed : prompt(" probeg kiriting"),
//  add : prompt(" oka problem bosa---tico.uz saytiga murojat qiling"),
// }
// console.log(mashina);

// let str = prompt("kiriting");                                                     (ustozni 1 masalasi)
// let result = 0;
// for (let i = 0; i < str.length; i++) {
//   if(+str[i]+1){
//     result += +str[i];
//   }
// }
// console.log(result);

// let str = prompt("kiriting");                                                                 (ustozni 2 masalasi)
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (!+str[i] !== false) {
//     result += str[i];
//   }
// }
// console.log(result);



// const jipes ={
//   kolatsiya : "salom",
//   yol_masofasi: 20,
//   benzin:120,
//   24: "akelkaldkoa",
// }
// let result = 0
// for (const key in jipes) {
//  if (typeof key == "string" && typeof jipes[key]=="number" ){
  
//   result += jipes[key]
//  }
// }
// console.log(result);