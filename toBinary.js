let commonUtil = require('./utility/utility');
let binaryUtil = require('./utility/toBinaryUtility');

var n, i;
console.log("Enter the number : ");
n = parseInt(commonUtil.userInput());
if(n>0)
{
    let arr = [];
    arr = binaryUtil.binary(n);
    var result='';
    for(i=arr.length-1; i>=0; i--)
    {
        result = result + arr[i];
        //console.log(arr[i]);
    }
    console.log("Binary of "+ n + " is " + result);
}
else if(n==0)
{
    console.log("0");
}
else
{
    console.log("Wrong input.");
}