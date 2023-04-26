let i;
let num = 5;
function facto(num) {
    let facto = 1;
    for(i=1; i<=num; i++) {
        facto = facto * i;
    }
    return facto;
}
result = facto(0);
console.log(result);