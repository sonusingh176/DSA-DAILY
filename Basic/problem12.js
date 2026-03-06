//write a function that calculates and return the average of a set of numbers.
// Example : [1,2,4] : (1+2+4)/3=2.333

//

function findAverage(numArr){

    let arrLen= numArr.length;
    let sum=0

    for(let i=0; i<numArr.length; i++){
           sum =sum+numArr[i]
    }

    return sum/arrLen;

}

console.log(findAverage([1,2,4]));
console.log(findAverage([5,5,5]));

console.log(findAverage([5,5,0]));