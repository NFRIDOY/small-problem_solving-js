let year = 2004;

function isLeapYear() {
    if(((year%400 == 0)&&(year%100==0))||(year%4==0)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(year));
