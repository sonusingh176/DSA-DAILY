// write a function that tells if provided year is a leap year or not.

// Kisi year ko leap year bolne ke liye:

// Year 4 se divisible hona chahiye
// Agar year 100 se divisible hai, to leap year nahi hota
// Lekin agar year 400 se divisible hai, to phir se leap year hota hai

function isLeapYear(year)
{
    if(year % 4 ===0){
        return true;
    }else{
        return false;
    }
}

console.log("isLeapYear(2023)",isLeapYear(2023));
console.log("isLeapYear(2023)",isLeapYear(2024));
console.log("isLeapYear(2023)",isLeapYear(2000));

