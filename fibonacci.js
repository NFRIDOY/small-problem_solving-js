//0 1 1 2 3 5 8 13
/*
let fibo = [0, 1];

let i;
for (i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);
console.log(fibo.length);
*/
//Ricursive
let fibo = [0,1];
function fibonacci(num) {
    if (num == 0) {
        // fibo[num] = 0;
        return 0;
    }
    else if (num == 1)
    {
        // fibo[num] = 1;
        return 1;
    }
    else {
        // fibo[num] = fibonacci(num);
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
// fibo = fibonacci(6);
for(let i = 0; i<=5; i++) {
    fibo[i] = fibonacci(i);
}
console.log(fibo);
