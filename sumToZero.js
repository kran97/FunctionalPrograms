let sum = require('./utility/utility');

console.log("Enter number of elements : ");
var n = sum.userInput();

console.log("Enter the array elements : ");
var arr = [];

const inputArr = sum.arrInput(arr, n);

const numTriplets = sum.sumZero(inputArr, n);

console.log("Number of triplets : ", numTriplets);