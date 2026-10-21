// Hint

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.


// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a sub


// function longestSubstring(str) {
//     let maxLength = 0;

//     for (let i = 0; i < str.length; i++) {
//         let bag = "";

//         for (let j = i; j < str.length; j++) {
//             let found = false;

//             // Check whether current character already exists in bag
//             for (let k = 0; k < bag.length; k++) {
//                 if (bag[k] === str[j]) {
//                     found = true;
//                     break;
//                 }
//             }

//             // Duplicate found → current substring stop
//             if (found) {
//                 break;
//             }

//             // No duplicate → add character
//             bag = bag + str[j];

//             // Update maximum length
//             if (bag.length > maxLength) {
//                 maxLength = bag.length;
//             }
//         }
//     }

//     return maxLength;
// }

// console.log(longestSubstring("abcabcbb")); // 3
// console.log(longestSubstring("bbbbb"));    // 1
// console.log(longestSubstring("pwwkew"));   // 3



// Sliding Window

function longestSubstring(s) {//abcabcbb
    let left = 0;
    let maxLength = 0;
    let set = new Set();

    for (let right = 0; right < s.length; right++) {

        // 1. Duplicate ko remove karo
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // 2. Current character add karo
        set.add(s[right]);

        // 3. Window ki length calculate karo
        let length = right - left + 1;

        // 4. Maximum length update karo
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

console.log(longestSubstring("hello"))