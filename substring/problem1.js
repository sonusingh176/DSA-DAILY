/**
 * Question 1 — Basic Substring
    Given:
    let str = "hello";
    Write a function that returns all possible substrings of the string.

    [
        "h",
        "he",
        "hel",
        "hell",
        "hello",
        "e",
        "el",
        "ell",
        "ello",
        "l",
        "ll",
        "llo",
        "l",
        "lo",
        "o"
    ]
 */

    //Bruit Force
    // function BasicSubstring(str){
    //     let newarr=[]
    //     for(let i=0;i<str.length;i++){ 
    //             let temp = "";
    //         for(let j=i;j<str.length;j++){ 
    //              temp = temp + str[j]; //""+h   , h+ e , he+ l , hel+l , hell+o ,
    //             newarr.push(temp)
    //         }
    //     }
    //     return newarr;
    // }

    // console.log(BasicSubstring("hello"))
  
// using built-in method
// The slice(start, end) method in JavaScript extracts a portion of an array or a string and returns it as a new copy,
// without modifying the original data
function AllSubString(str){
    let newarr=[];
    for(let i=0;i<str.length;i++){
         
        for(let j=i;j<str.length;j++){
            newarr.push(str.slice(i, j + 1));
        }
    }
    return newarr;
}

console.log(AllSubString("hello"))