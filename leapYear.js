var read = require('readline-sync');
module.exports={
    yearInput,
    leapYear
}
function yearInput()
{
    var years = (read.question('Enter year: '));
    return years;
}
var year = yearInput();
function leapYear(year)
{
    if(year.length === 4)
    {
        if(year%4 === 0 && year%100 != 0)
        {
            console.log(year + " is a leap year");
        }
        else if(year%400 === 0)
        {
            console.log(year + " is a leap year");
        }
        else
        {
            console.log(year + " is NOT a leap year");
        }
    }
    else
    {
        console.log("Year should be of 4 digits.");
    }
}
leapYear(year);