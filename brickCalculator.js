/*
1st 10 flour = 15 feet height
2nd 11 to 20 flour = 12 feet height
last 21 to infinity flour = 10 feet height

each feet = 1000 brick
*/
function brickCalculator(flourCount) {
    if(flourCount<=10 && flourCount>=0) {
        return flourCount*15*1000;
    }
    else if(flourCount>10 && flourCount<=20) {
        flourCount = flourCount-10;
        return 10*15*1000 + flourCount*12*1000;
    }
    else if(flourCount>20) {
        flourCount = flourCount-20;
        return 10*12*1000 + 10*15*1000 + flourCount*10*1000;
    }
    else {
        return -1;
    }
}
var brick = brickCalculator(21);
console.log(brick);