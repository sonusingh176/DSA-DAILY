/**
 * write a program to find the Kth largest element in an unsorted array
 * Array =[7,10,4,3,20,15]
 * K=3
 * Expected: 10 
 */

function findKNumber(arr, k) {

    for (let i = 0; i < arr.length; i++) { //i0,1 

        let count = 0;//1 ,2 , 3 , 

        // current element se kitne elements bade hain
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[i]) { //7>7  (x) , 10> 7 , 4>7 (X) , 3>7(X) , 20>7 , 15> 7  && 7> 10 (X), 10>10(x) , 4>10 (X) , 3>10(x), 20>10 , 15> 10
                count++; //1 ,2 ,3 ,4 ,5
            }
        }

        // agar k-1 elements isse bade hain
        // to current element kth largest hai
        if (count === k - 1) { //3 ===3-1(X)
            return arr[i];
        }
    }
}

console.log(findKNumber([7, 10, 4, 3, 20, 15], 3));
// 10