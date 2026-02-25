//write a function that calculates and print the sums of the digits of a given number.
//Input : A number , positive integer->12 ,34,123 ,1234

// Example :
// 12 : 1+2 =3
// 23 : 2+3 = 5
// 456 : 4+5+6 = 15

function SumOfDigits(num)
{
        const newarr =num.split('');
      //  console.log(newarr.length)
            let sum=0;
        for(let i=0; i<newarr.length;i++){

          //  console.log(newarr[i])
            sum+=parseInt(newarr[i]);

        }
        return sum;

}

console.log("sumOfDigits(21)",SumOfDigits("21"));
console.log("sumOfDigits(21)",SumOfDigits("00"));


//================================================================
function SumOfDigits2(num)
{
    const newarr=num.toString().split('');//casting+make array
    let sum=0;

    for(let i=0;i<newarr.length;i++){
        sum+=parseInt(newarr[i]);
    }
    return sum;

}

console.log("sumOfDigits(21)",SumOfDigits2(555));

//================================================================

function sumOfDigits3(num)
{
  let sum=0;

  while(num>0){
    sum+=num % 10;
    num = Math.floor(num/10);
  } 

  return sum;

}

console.log(sumOfDigits3(553))