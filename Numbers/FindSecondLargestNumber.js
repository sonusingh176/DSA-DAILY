/**
 *
 4. Find the Second Largest Number

Question: Find the second-largest number.

[10, 5, 8, 20, 15]

Output:

15

Think about:

Brute force → sort and pick the second element from the end.
Then try to improve it to O(n) without sorting.
 */

// 1: Quick Way
// let arr=[10, 5, 8, 20, 15];
// let newArr=arr.sort((a,b)=>b-a);
// console.log(newArr[1]);



// 2: Sorting

// function FindSecondLargestNumber(arr){
//     arr.sort((a,b)=>b-a);

//     for(let i=1;i<arr.length;i++){
//         if(arr[i] !==arr[0]){
//             // console.log(arr[i],arr[0]); 15 !== 20(kya ye dono number barabar nahi hai)
//             return arr[i]
//         }
//     }
// }

// console.log(FindSecondLargestNumber([10, 5, 8, 20, 15]));



// Brute force

function FindSecondLargestNumber(arr){

    let largest=-Infinity; //10(X) ,20
    let secondLargest = -Infinity; // 10(X) ,15

    for(let i=0; i<arr.length;i++){ //10 , 5 
        if(arr[i]>largest){ // 10 >-∞ (true),  5> 10 (false) ,8>10 (false) , 20 >10(true) , 15 >20(false)
            largest=arr[i]  // 10  , 20
        }
    }

    for(let i=0;i<arr.length;i++){ //10 ,
        if(arr[i] > secondLargest && arr[i] < largest){ // 10 >-∞(TRUE) && 10 < 20(TRUE)  ,5>10(FASLSE) && 5 <20(TRUE) , 8>10(FALSE) && 8<20(TRUE) , 20 >10 && 20 <20(FALSE) , 15>10(TRUE) && 15<20(true)
             secondLargest = arr[i]; // 10 (x)  , 15
        }
    }

    return secondLargest; //15
}

console.log(FindSecondLargestNumber([10, 5, 8, 20, 15]));


// 4. Sorting + Set

// function FindSecondLargestNumber(arr){
//     let unique=[...new Set(arr)];

//     unique.sort((a,b)=>b-a);

//     return unique[1];

// }

// console.log(FindSecondLargestNumber([8, 1, 5, 12, 3, 12]));