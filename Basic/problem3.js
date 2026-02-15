//write a function that tells if a given number is even or odd

function checkEvenOdd(num){

   const remainder = num % 2;

  // console.log(remainder);

   return (remainder ===0) ? "Even":"odd"; //ternary operator

}

console.log(checkEvenOdd(10)) 
console.log('13 is :',checkEvenOdd(13)) 
console.log('0 is :',checkEvenOdd(0)) 
console.log('-1 is :',checkEvenOdd(-1)) 
console.log('1 is :',checkEvenOdd(1)) 
console.log('255 is :',checkEvenOdd(255)) 