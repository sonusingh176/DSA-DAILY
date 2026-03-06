//write a function that finds all the factors of a given number.
//Input : number ,positive integer
//return : factors of a number.
//factor : Is a number that divides the given number evenly or exactly ,leaving no remainder.
// Example : 
    //  4 => 1 ,2 , 4
    //  14 => 1, 2 ,7 , 14

    function findFactors(num)
    {
        if(num<1){
            throw new Error("Input Number should be greate than 1"); 
        }
        let facts=[];
        for(let i=1; i<=num;i++){
                if(num % i===0){
                    facts.push(i)

                }
        }
        return facts;
    }

    console.log("factors of 14",findFactors(14));
    console.log("factors of 4",findFactors(4));
    console.log("factors of 13",findFactors(13));
    console.log("factors of 0",findFactors(0));
    console.log("factors of 7",findFactors("7"));