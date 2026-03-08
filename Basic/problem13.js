// write a function that tells if the given number is prime or not.
// Prime Number : A number that can only be divided by itselef and 1 without remainders.

function isPrimeNumber(num){

    let result =  true;
    for(let i=2; i < num; i++){
            if(num % i === 0){
                result = false;
                break;
            }
    }

    return result;

} 

// console.log("45 is prime: ",isPrimeNumber(45));
// console.log("91 is prime: ",isPrimeNumber(91));
// console.log("17 is prime: ",isPrimeNumber(17));

// optimization : Even numbers are not prime numbers.

function isPrime2(num){
    let result =true;

    if(num %2 ===0){ // is number is divisible by 2 then it is not prime.
        result=false;
    }

    if(result===true){
        for(let i=3 ; i < num ; i=i+2){ // we already checks for even number. that's why loop start with 3 and run for odd number. now loop is running less time .  
             if(num % i ===0){
                result=false;
                break;
             }
        }
    }

    return result;
}

console.log("45 is prime: ",isPrime2(45));
console.log("91 is prime: ",isPrime2(91));
console.log("17 is prime: ",isPrime2(17));

