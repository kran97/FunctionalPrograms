let read = require('./utility/utility');

console.log("In which unit you want to convert temperature?");
console.log("");
console.log("Enter f for fahrenheit and c for celsius : ");
var input = read.userInput();

console.log("");

if(input == 'f')
{
    console.log("Enter temperature : ");
    var temp = parseInt(read.userInput());
    var fah = read.tempConvFah(temp);
    console.log("temperature in fahrenheit is ", fah);
}
else if(input == 'c')
{
    console.log("Enter temperature : ");
    var temp = parseInt(read.userInput());
    var cel = read.tempConvCel(temp);
    console.log("temperature in celsius is ", cel);
}
else
{
    console.log("Invalid input.");
}