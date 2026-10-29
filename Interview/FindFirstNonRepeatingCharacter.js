// Write a JavaScript function to find the first character that appears only once in a string.

// Example:
// Input: "aabbcdeef"
// Output: "c"

// Another example:
// Input: "aabb"
// Output: null


function FindFirstNonRepeatingCharacter(str){

    let obj={};
 

    // First loop: Count each character
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }

    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]===1){
            return str[i]
        }
    }

     return null;

}

// console.log(FindFirstNonRepeatingCharacter("aabbcdeef")); // "c"
// console.log(FindFirstNonRepeatingCharacter("aabb"));     // null


// =================================================================

function FindFirstNonRepeatingCharacter2(str){

   

    for(let i=0 ;i<str.length ;i++){
         let count=0;

         for(let j=0;j<str.length;j++){
           
             if (str[i] === str[j]) {
                count++;
            }
         }

         if(count === 1){
             return str[i];
         }


    }
    return null;
    
}

console.log(FindFirstNonRepeatingCharacter2("aabbcdeef"))