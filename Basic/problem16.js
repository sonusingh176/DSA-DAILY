//find Armstrong Number ?
//Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. 
// For example, 153 is an Armstrong number because > 153 = 1*1*1 + 5*5*5 + 3*3*3 

function checkArmstrong(num){

    let str = num.toString();
    let len = str.length;

    let result=0; //153

    for(let i=0; i < len ;i++){
         let digit=Number(str[i]);
       // result += Math.pow(digit, len) ;
      result += digit ** len;   // (1)^3 + (5)^3 + (3)^3
    }
    return num === result
     
}

//console.log("is Armstrong :",checkArmstrong(9474)); 

// ===============================================================

function checkArmstrong2(num){

    let  original = num;
    let sum =0;
    let totaldigit = num.toString().length;

   while (num > 0) {  // 153 > 0   | 15 > 0  | 1 > 0  | 0> 0 (x)
    let digit= num % 10; // 153 % 10 = 3   |  15 % 3 = 5   | 1 % 10 = 1 
    sum+=Math.pow(digit,totaldigit);  // 3 = 3*3*3  sum = 27   |  5 =5*5*5 = sum = 27 + 125 = 152   |  1= 1*1*1 , sum = 152 + 1 => 153
    num=Math.floor(num / 10);  // 153 / 10 = 15.3  => Math.floor(15.3) , 15   | 15 / 10 =1.5   => Math.floor(1.5)  => 1 |  1 / 10 => 0.5   Math.floor(0.5) => 0
   }

  return sum === original;
   
}

console.log("is artmstrong", checkArmstrong2(9474)); 