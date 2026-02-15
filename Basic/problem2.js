// write a function that calculates and prints the area of a rectangle given its length and width.

function rectanglearea(width,length){

   

    if(length <= 0){
        throw new RangeError("length should be a positive number");

    }

    if(width <= 0){
        throw new Error("width should be a positive number");
    }

    const res= w*l;
    console.log('area is : ',res);
}

//rectanglearea(5,4);
//rectanglearea(50,422);
rectanglearea(0,4);  //not possible
//rectanglearea(-5,-4); //not possible
//rectanglearea(5,2.5);