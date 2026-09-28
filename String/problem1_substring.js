/**
 * Substring — Easy Practice Set

    Q1. Print all substrings

    Input:  "abc"

    Output:

    a
    ab
    abc
    b
    bc
    c

 * 
 */

    function BasicSubstring(str){


        for(let i=0 ;i<str.length ;i++){ /// i=1
             let temp ="";
              for(let j=i ; j<str.length ;j++){ 
                 temp=temp+str[j] ;  
                 console.log(temp) 
                                
              }
        }
    }

    // console.log()

    BasicSubstring("abc")


