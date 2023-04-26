let i, j, num, count;
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
count=0;
let dif1=0, dif2=0;
let diffArray = [];

function getDifference(dif2, dif1) {
    if (dif2 > dif1) {
      diffArray.push(dif2 - dif1);
    }
  
    return dif1 - dif2;
  }

for(j=2; j<=10; j++) {
    console.log(j, " is Prime? ", isPrime(j));

    //prime Separation List
    if(isPrime(j) == true) {
        truePrime.push(j);
        count++;
        if(count==1) {
            dif1 = j;
        }
        else if(count==2) {
            dif2 = j;
            count = 0;
            // getDifference(dif2, dif1);
        }
    }

    else if(isPrime(j) == false) {
        notPrime.push(j);
    }
    // if(count == 2) {
    //     count = 0;
    // }
}
console.log("Prime");
console.log(truePrime);
// console.log("Not Prime");
// console.log(notPrime);
console.log("Diffarance");
// console.log(diffArray);

let diffArr = [];
let value;
for(i=truePrime[4]; i>1; i = i - 1) {
    value = getDifference(truePrime[i]-truePrime[i-1]);

    diffArr.push(value);
}
console.log(diffArr);