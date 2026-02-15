//write a function that finds and prints the smallest number among three given numbers.
//Math.min is not alloed;

// function smallestnumber(a,b,c){

//     if(a<b && a<c){
//         return a;
//     }

//     if(b<a && b<c){
//         return b;
//     }

//     if(c<a && c<b){
//         return c;
//     }

//     return a;

// }

// console.log("smallest number ", smallestnumber(5,8,3));
// console.log("smallest number ", smallestnumber(5,-8,3));
// console.log("smallest number ", smallestnumber(5.6,8,-3));
// console.log("smallest number ", smallestnumber(5,5,5));
// console.log("smallest number ", smallestnumber(5,0,5));

// ==================================================================

//(condition) ? "result":"res"

// function smallestnumber(a,b,c){
//     return  (a<b && a<c) ? a  : (b<a && b<c) ? b  : c;
// }

// console.log("smallest number ", smallestnumber(5,8,3));
// console.log("smallest number ", smallestnumber(5,-8,3));
// console.log("smallest number ", smallestnumber(5.6,8,-3));
// console.log("smallest number ", smallestnumber(5,5,5));
// console.log("smallest number ", smallestnumber(5,0,5));


// ==================================================================

function smallestnumber(a,b,c){
   
    let min= a;

    if(b<min){
        min=b;
    }
    if(c<min){
        min=c;
    }

    return min;
}

console.log("smallest number ", smallestnumber(5,8,3));
console.log("smallest number ", smallestnumber(5,-8,3));
console.log("smallest number ", smallestnumber(5.6,8,-3));
console.log("smallest number ", smallestnumber(5,5,5));
console.log("smallest number ", smallestnumber(5,0,5));


