// Question 2 — Count all substrings of a string

// Given:

// let str = "abc";

// Write a function that returns the total number of possible substrings.

// Expected:

// Input: "abc"
// Output: 6

// Because the substrings are:

// "a"
// "ab"
// "abc"
// "b"
// "bc"
// "c"

function countSubstring(str){
    let count=0;
    for(let i=0 ; i<str.length ;i++){
        for(let j=i; j<str.length;j++){// 0
           count++;
        }
    }

    return count;
}

console.log(countSubstring("abc"))