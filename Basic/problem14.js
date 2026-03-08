//write a function that counts and returns the number of words in a sentence.
// Example :
// 1)  "I LOVE MY INDIA" : 4


function findTotalWords(str){

    let count =0;
    for(let i=0 ;i <= str.length ;i++){
        if(str[i]===" "){
            count++;
        }
    }

    return count+1; // space+1 =words

}

console.log(findTotalWords("I LOVE MY INDIA"));
