// Move all zeros to the end
// Given an array of numbers, move all zeros to the end while maintaining the relative order of the non-zero elements.

// Important: Do this in place, without creating another array.

// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]


function MoveAllZerosToEnd(arr){
    let indexPosition =0;

    // Step 1: Move non-zero elements forward
    for(let i=0 ;i<arr.length;i++){//
        if(arr[i]!== 0){ //0 barabar nahi hai 0 ke.(ans false) ,  1 barabar nahi hai 0 ke.(ans true)
            arr[indexPosition] = arr[i]; //[1]
            indexPosition++; //0->1 
        }
    }


    console.log(arr); // [1, 3, 12, 3, 12]
    console.log(indexPosition); // 3



}

console.log(MoveAllZerosToEnd([0, 1, 0, 3, 12]))