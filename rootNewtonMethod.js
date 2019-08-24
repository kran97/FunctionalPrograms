let read = require('./utility/utility');
console.log("Enter the number whose root you want to find : ");
var num = parseInt(read.userInput());

if(num>0)
{
   var root = read.sqrt(num);
   console.log("Square root is ",root);
}