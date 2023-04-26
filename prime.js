let i, j, num;
let truePrime = [];
let notPrime = [];

function isPrime(num) {
    // let count = 0;
    if(num == 1) {
        return false;
    }
    if(num == 2) {
        return true;
    }
    for(i=2; i<num; i++) {
        if(num%i==0) {
            // count++;
            return false;
        }
        else {
            return true;
        }
    }
}
// let result = isPrime(2);
// console.log(result);

//prime List
for(j=2; j<=100; j++) {
    console.log(j, " is Prime? ", isPrime(j));

    //prime Separation List
    if(isPrime(j) == true) {
        truePrime.push(j);
    }
    else if(isPrime(j) == false) {
        notPrime.push(j);
    }
}
console.log("Prime");
console.log(truePrime);
console.log("Not Prime");
console.log(notPrime);