//write a program to find Factorial of given number.

// Input: A number , positive integer -> 0,1 ,4 ,7
//Factorial : Multiplication of all positive integers from 1 to a given number;

// Example :
//  1! =1
//  2! =2*1 =2
//  3! = 3*2*1 =6

function findFactorial(num){

    let result =1
  for(let i=1; num>=i ;i++)
    {
     result= result *i ;
  }
  return result;
}

console.log("factorial of 4 :", findFactorial(4));