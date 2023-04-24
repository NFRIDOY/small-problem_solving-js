function feetToMile(feet) {
    return feet*0.00018939399;
}
var getFeet = 50100;

var mile = feetToMile(getFeet);
console.log("Full Value = ",mile,"Mile");

var mile1 = feetToMile(getFeet).toFixed();
console.log("Round = ", mile1,"Mile");
var mile2 = feetToMile(getFeet);

console.log("3 Decimal Point = ", mile2.toFixed(3),"Mile");

// function feetToMileShow(mile) {
//     console.log(mile,"Mile");
// }