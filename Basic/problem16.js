//find Armstrong Number ?
//Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. 
// For example, 153 is an Armstrong number because > 153 = 1*1*1 + 5*5*5 + 3*3*3 

function  CheckArmstrongNumber(num){

    const casttostr= num.toString();

    if (casttostr.length > 3) {
        throw new Error("This method only works for 3-digit numbers");
    }

    let result=0;
    for(let i=0;i<casttostr.length;i++){

        result+= parseInt(casttostr[i]*casttostr[i]*casttostr[i]) //

    }

    if(num==result){
        return true;
    }

    //return result;

}

// console.log(CheckArmstrongNumber(153));
// console.log(CheckArmstrongNumber(1634));
// console.log(CheckArmstrongNumber(370));

// =================================================================================================

// 153 % 10 = 3
// 15   % 10 = 5
// 1   % 10 = 1

//Above Solution is not good . Don't even write this type of solution in interviews.


function CheckArmstrongNumber2(num)
{
    let original=num;
    let sum=0;

    // step 1: count digit
    let totaldigits=num.toString().length;

    // step 2: loop to process each digit
    while (num>0) {
        let digit =num % 10 ;  // last digit
        sum += Math.pow(digit,totaldigits);  // power add
        num = Math.floor(num/10); // remove last digit
    }  

     // step 3: compare
     if (sum === original) {
        return "Armstrong Number";
    } else {
        return "Not Armstrong Number";
    }

}

console.log(CheckArmstrongNumber2(153)); // Armstrong Number
console.log(CheckArmstrongNumber2(123)); 
