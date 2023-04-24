// HOW TO INPUT IN JS => YOUTUBE LINK => https://youtu.be/c4CAqjkljJ4
/* Have to do all this in TERMINAL in a project/folder
IN TERMINAL: 
npm init 
npm install prompt-sync
*/

const prompt = require('prompt-sync')();

var Name = prompt("What is Your Name? => ");
console.log("Hi ",Name.toUpperCase());
console.log("String Length",Name.length);

var num1 = prompt("Enter 1st Num = ");
var num2 = prompt("Enter 2nd Num = ");

//Converting String To Float To Calculate
num1 = parseFloat(num1);
num2 = parseFloat(num2);

//Output
console.log("Sum =", num1 + num2);