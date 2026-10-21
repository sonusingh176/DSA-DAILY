/**
 *
 5. Check If Two Arrays Have the Same Elements

 Question: Determine whether two arrays contain the same elements.

    arr1 = [1, 2, 3, 4]
    arr2 = [4, 3, 1, 2]

    Output:

    true
 * 
 */

    // function CheckTwoArraysHaveSameElements(arr1,arr2){
    //     if(arr1.length !== arr2.length) return false;

    //     for(let x of arr1){
    //         // console.log(x);//1,2,3,4
    //         if(!arr2.includes(x)) return false;//arr1 ke har element ko arr2 mein search karta hai.
    //     }

    //     for(let x of arr2){
    //         if(!arr1.includes(x)) return false;//arr2 ka har element arr1 mein hai ya nahi.
    //     }
    //     return true;
    // }

    // console.log(CheckTwoArraysHaveSameElements([1, 2, 3, 4],[4, 3, 1, 2]));

    // 2. Brute force 

function sameElementBrute(arr1, arr2) {

    // Agar arr1 aur arr2 ki length equal nahi hai
    // 3 !== 2 -> true -> return false
    //"Kya arr1 aur arr2 equal nahi hain?" ->if condition true ho gyi, tab return false milega.
    if (arr1.length !== arr2.length) return false;

    // i = 0 -> 0 < 3 -> true
    // i = 1 -> 1 < 3 -> true
    // i = 2 -> 2 < 3 -> true
    // i = 3 -> 3 < 3 -> false -> loop stop
    for (let i = 0; i < arr1.length; i++) {

        // Har arr1 element ke liye initially maan rahe hain
        // ki matching element abhi nahi mila
        let found = false;


        // j = 0 -> 0 < 3 -> true
        // j = 1 -> 1 < 3 -> true
        // j = 2 -> 2 < 3 -> true
        // j = 3 -> 3 < 3 -> false -> loop stop
        for (let j = 0; j < arr2.length; j++) {

            // i = 0, j = 0
            // arr1[0] = 1
            // arr2[0] = 3
            // 1 === 3 -> false

            // i = 0, j = 1
            // arr1[0] = 1
            // arr2[1] = 1
            // 1 === 1 -> true

            // -----------2nd-------------------------

            // i = 1, j = 0
            // arr1[1] = 2
            // arr2[0] = 3
            // 2 === 3 -> false

            // i = 1, j = 1
            // arr1[1] = 2
            // arr2[1] = 1
            // 2 === 1 -> false

             // i = 1, j = 2
            // arr1[1] = 2
            // arr2[2] = 2
            // 2 === 2 -> true

            // ------------ 3rd ----------------------

            // i = 2, j = 0
            // arr1[2] = 3
            // arr2[0] = 3
            // 3 === 3 -> true


            if (arr1[i] === arr2[j]) {

                // Matching element mil gaya
                found = true;

                // Match mil gaya, ab inner loop ki zarurat nahi
                break;// 👈 inner loop se bahar
            }
             
        }

  
        // Agar pura inner loop chalne ke baad bhi
        // found = false hai -> element nahi mila
        // !false -> true -> return false
        if (!found) return false; // 👈 BREAK ke baad yahan aata hai
    }

    // Saare arr1 elements arr2 mein mil gaye
    return true;
}

console.log(sameElementBrute([1, 2, 3], [3, 1, 2]));