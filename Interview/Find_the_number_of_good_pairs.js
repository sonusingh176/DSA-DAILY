/**
 * https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/
 * 
 * 
 */

var numberOfPairs = function(nums1, nums2, k) {
    let pair_count=0;

    for(let i=0;i<nums1.length;i++){

        for(let j=0;j<nums2.length;j++){
           // console.log(nums1[i]%(nums2[j]*k))
            if(nums1[i]%(nums2[j]*k) ===0){
                pair_count++;
            }
        }
    }

     return pair_count;
};


let pair=numberOfPairs([1,3,4],[1,3,4],1)

 console.log(pair)
