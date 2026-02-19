// write a function that return the reverse of string
// Example "Sonu" -> "unoS"
// Example "Software development" -> "tnempoleved erawtfoS"


function reverseString(str){

    if(typeof str !== 'string'){
        throw new Error("Only String are allowed");
    };
 
    let mystr="";

    for(let i=str.length-1; i>=0 ;i--){
           mystr+=str[i]
    }

    return mystr;
}

// console.log(reverseString("Sonu")) 
//  console.log(reverseString("Software development")) 
 //console.log(reverseString(4545454))  


 //==============Using Built In method
 
 //split();
 // |-The split() method splits a string into an array of substrings.
 // |- The split() method returns the new array
 // |-The split() method does not change the original string.
//  |-If (" ") is used as separator, the string is split between words.
 
//reverse();
// |- The reverse() method reverses the order of the elements in an array.
// |- The reverse() method overwrites the original array.

//join();

// |- The join() method returns an array as a string.
// |- The join() method does not change the original array.
// |- Any separator can be specified. The default is comma (,).

function reverseString2(str)
{
    const splittedInput = str.split('');
    const reversedArray = splittedInput.reverse();
    const result = reversedArray.join('');
    return result; 
}

// console.log(reverseString2("Sonu")) 
 console.log(reverseString2("Software development")) 
// console.log(reverseString2(4545454))  