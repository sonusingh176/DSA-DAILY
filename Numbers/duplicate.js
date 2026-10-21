// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2


// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3


// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

/**
 * Constraints & impact
    Array modify nahi kar sakte
    → ❌ Sorting directly (nums.sort()) allowed nahi.
    Extra space sirf O(1)
    → ❌ Hash/Object / Set allowed nahi, kyunki O(n) space lagta hai.
    Exactly one number repeated hai
    → Duplicate sirf ek value hai, although woh multiple times appear kar sakti hai.
    Values [1, n] range me hain
    → Ye constraint Floyd's Cycle Detection jaisi clever approach possible banata hai.
 * 
 */


//find the duplicate number.
let arr= [1, 3, 5, 3, 7,3];

//======== Hash/Object — O(n) space=========================
//sortest way to find duplicate number
// let obj={};
// let duplicate;

//  for(let i=0; i<arr.length; i++){ 
//     if(obj[arr[i]]){
//         duplicate=arr[i];   
//         break;
//     }
//     obj[arr[i]] = 1;
//  }
// console.log("Duplicate number is:", duplicate);

// ===========Brute Force — O(n²) ==============================
// let duplicate;

//  for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             duplicate=arr[i];
//             break;
//         }
//     }

//     if(duplicate!== undefined){
//         break;
//     }
// }

// console.log("Duplicate number is:",duplicate);


// ======== Sorting — O(n log n) ==================

// arr.sort();
// let duplicate;
// for(let i=0 ; i<arr.length-1; i++){
//     if(arr[i]===arr[i+1]){
//         duplicate=arr[i];
//         break;
//     }
// }
// console.log("Duplicate number is:",duplicate);

// =============Set approach==============================

let set =new Set();
let duplicate;


for(let num of arr){//Ye directly values deta hai. Index nahi milta directly.
   if(set.has(num)){
      duplicate = num;
      break;
   }

   set.add(num);
}

console.log("Duplicate number is:", duplicate);

/**
 * Set ke methods
   |-add() Set ke andar koi value add karta hai.
   |-has() Set me koi value hai ya nahi check karta hai.
   |-delete() Set se koi value delete karta hai.
   |-clear() Set ko clear karta hai.
   |-size() Set me kitne elements hai ye deta hai.
 * 
 */

   