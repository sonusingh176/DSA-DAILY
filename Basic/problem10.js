/*
-------------------------------------------------------
Problem:
Write a function that counts and prints the number of vowels and consonants in a given string.

Vowels are: a, e, i, o, u (both uppercase and lowercase).
Consonants are all other English alphabet letters
(excluding spaces, numbers, and special characters).

-------------------------------------------------------
Input:
A string value.

Output:
Print or return:
- Number of vowels
- Number of consonants

-------------------------------------------------------
Examples:

Input: "hello"
Output:
Vowels: 2
Consonants: 3

Input: "JavaScript"
Output:
Vowels: 3
Consonants: 7

Input: "I love coding"
Output:
Vowels: 5
Consonants: 6

-------------------------------------------------------
*/

function countVowelandConsonants(str)
{
    let vCount=0;
    let cCount =0;

    for(let i=0; i<str.length;i++){

        //Approach 1 - failed when there is space between the string. 
        // if(str[i]=='a'|| str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' ||  str[i]=='E' || str[i]=='I' || str[i]=='O' ||  str[i]=='U'){
        //  vCount=vCount+1; 
        // }else{
        //     cCount=cCount+1;
        // }

        if(str[i]=='a'|| str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' ||  str[i]=='E' || str[i]=='I' || str[i]=='O' ||  str[i]=='U'){
            vCount=vCount+1; 
        
        }else if(str[i] !==' ' && str[i]!=='a' && str[i] !=='e' && str[i]!=='i' && str[i]!=='o' && str[i]!=='u' && str[i]!=='A' &&  str[i]!=='E' && str[i]!=='I' && str[i]!=='O' &&  str[i]!=='U'){

        cCount=cCount+1 
        }
    
    }
    console.log("vowel ", vCount)
    console.log("Consonants", cCount)
    

}

//countVowelandConsonants("hello");
// countVowelandConsonants("I love coding");
// countVowelandConsonants("JavaScript");

//I 
// lv 
// cdng"

// =====================================2nd way=================================================

function countVowelandConsonants2(str){

    let vow=['a','e','i','o','u'];

    let vcount=0;
    let ccount=0;
    for(let i=0; i<str.length;i++){   
        let ch=str[i].toLowerCase();
        if(vow.includes(ch)){
            vcount=vcount+1;
        }
        else if(ch !==' '){
            ccount=ccount+1;
        }
    }
    console.log("vowel",vcount);
    console.log("consonants",ccount);

}

//countVowelandConsonants2("I love Coding");

// ================================3re Improvement===================================================
/**
 * Next improvement goal:
 * 👉 Ignore:
 * space
 * numbers
 * symbols (@ # $ 1 2 etc.)
 */


function countVowelandConsonants3(str){

    let vow=['a','e','i','o','u'];

    let vcount=0;
    let ccount=0;
    for(let i=0; i<str.length;i++){   
        let ch=str[i].toLowerCase();
        
        if(ch>= 'a' && ch <= 'z'){
            if(vow.includes(ch)){
              vcount++;
            }else{
                ccount++;
            }
    }
}
    console.log("vowel",vcount);
    console.log("consonants",ccount);

}

countVowelandConsonants3("I love Coding 123!!!");


