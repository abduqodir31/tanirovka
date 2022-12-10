 let los = prompt('balingizni kiritin')

let water = 90;
if (los > 90){
    console.log("bujet");
}
else if( los < 90 && los > 70 ){
    console.log("contract");
}
else if ( los < 70 && los > 50 ){
    console.log("super contract");
}
else if  ( los < 50 && los > 10 ){
    console.log("failed");
}
