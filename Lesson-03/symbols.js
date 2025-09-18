let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
 
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
let sym3=sym1===sym2;
console.log("These two Symbols are the same:", sym1 === sym2);
document.getElementById("sym").innerHTML=sym3;
