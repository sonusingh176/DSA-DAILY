
/**
 * Question: Find the minimum difference between any two numbers.
 * [8, 1, 5, 12, 3]
 * Output:
 * 2
 * Because 5 - 3 = 2.
 */

//Brute force → calculate difference of every pair.

// function FindMinimumDifference(arr){
//     let min=Infinity;//Infinity ka faayda: Duniya ka koi bhi real number Infinity (\(\infty \)) se chhota hi hoga.
//       //7
//       //2

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//              let diff = Math.abs(arr[i] - arr[j]);

//             if (diff < min) {
//                                // 7<∞ , 2<7 , 4<2 ,5<2 (1ST Iteration)
//                 min = diff;    // 4<2 ,11<2, 2<2 (2ST Iteration)
//                                //7< 2, 2<2 (3ST Iteration)
//                                //9<2 (4ST Iteration)
//             }
//         }
//     }
//      return min;

// }

// console.log(FindMinimumDifference([8, 1, 5, 12, 3]));


// ==================SORT===========================================

// function FindMinimumDifference(arr) {
//     arr.sort((a, b) => a - b); //[1, 3, 5, 8,12]

//     let min = Infinity;//2

//     for (let i = 0; i < arr.length - 1; i++) {
      
//         let diff = arr[i + 1] - arr[i];// 3-1 =2  , 5-3 =2 ,8-5 =3

//         if (diff < min) {//2<∞ (T)  , 2<2 (F) , 3<2(F) 
//             min = diff;  //min=2
//         }
//     }

//     return min;
// }

// console.log(FindMinimumDifference([8, 1, 5, 12, 3]));

// ==================Brute Force — Using Array=============================

function FindMinimumDifference(arr) {
    let num = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            num.push(Math.abs(arr[i] - arr[j]));
        }
    }

    return Math.min(...num);//spread operator. Ye internally almost aisa hai: Math.min(7, 3, 4, 11, 2);. Math.min() array nahi leta hai, isliye array ko spread krna pada.
                        
}

console.log(FindMinimumDifference([8, 1, 5, 12, 3]));
