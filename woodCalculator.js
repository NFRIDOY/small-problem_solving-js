/*
Documantation: Explanation
Wood Needed Per Component:-
chair = 1 cubic feet wood 
Table = 3 cubic feet wood 
Bed = 5 cubic feet wood 
*/
// HOW TO INPUT IN JS => YOUTUBE LINK => https://youtu.be/c4CAqjkljJ4
/* Have to do all this in TERMINAL in a project/folder
IN TERMINAL: 
npm init 
npm install prompt-sync
*/
const prompt = require('prompt-sync')();

function woodCalculator(chair, table, bed) {
    console.log("Wood Needed For chair= ",chair*1 , " Cubic Feet");
    console.log("Wood Needed For table = ",table*3 , " Cubic Feet");
    console.log("Wood Needed For bed= ",bed*5 , " Cubic Feet");

    var total = chair*1 + table*3 + bed*5;
    console.log("total Wood Needed = ",total , " Cubic Feet");
    return total;
}
var chair, table, bed;
chair = 10;
table = 8;
bed = 5;
var chair = prompt("How Many chair?");
var table = prompt("How Many table?");
var bed = prompt("How Many bed?");
var total = woodCalculator(chair, table, bed);
console.log("total Wood Needed = ",total , " Cubic Feet");
