//write a program that sawp two numbers
//Input : Two numbers a & b
//Example 
    //   Input a= 5 ,b =6 ;
    //   Output a=6 , b=5

// Approach 1. using 3rd variable

function swapNumber(){

    let a =5;
    let b=6;
    let c=a; //take third valiable.
     
    console.log(`before swap value of a ${a} & value of b ${b}`);
    a=b;
    b=c;
    console.log(` after swap value of a ${a} & value of b ${b}`);

}

// swapNumber()

// Approach 2 . without 3rd variable

function swapNumber2(){

    let a=5;
    let b=6;
    
    console.log(`before swap value of a ${a} & value of b ${b}`);
    a=a+b;  //(5+6) now a became 11
    b=a-b;  //(11-5) now b became 6
    a= a-b //(11-6) now a became 5
    console.log(` after swap value of a ${a} & value of b ${b}`);

}
swapNumber2();