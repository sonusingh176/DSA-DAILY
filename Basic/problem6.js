// write a function that return  the reverse of string

// example: "sonu" ->"unos"
// example: "software development" ->"tnempoleved erawtfos"


function reverseString(str){

    if(typeof str !== 'string'){
        throw new Error("only string are allowed")
    }

    let mystr="";
    for(let i=str.length-1; i>=0;i--) {
        //console.log(str[i])
        mystr+=str[i];
    }

    return mystr;

}

// console.log("sonu => ",reverseString("sonu"));
// console.log("software development => ",reverseString("software development"));
// console.log("test code=> ",reverseString(45545456));

// =========================================================================

// split() method splits a string into array of substring. and return a new array,
// reverse()
// join()

function  reverseString2(str){

    const splitInput = str.split('');
    //console.log(splitInput)

    const reverseString= splitInput.reverse();
    //console.log(reverseString)

    const result = reverseString.join('');
   // console.log(result);

   return result

}

console.log("sonu => ",reverseString2("sonu"));
// console.log("software development => ",reverseString2("software development"));
// console.log("test code=> ",reverseString2(45545456));