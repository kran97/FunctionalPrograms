let arrObj = require('./utility/utility');
var read = require('readline-sync');

var row = read.question("Enter number of rows : ");
var col = read.question("Enter number of columns : ");

var arr = [];

const inputArr = arrObj.input(arr, row, col);

console.log(" ");

const outputArr = arrObj.output( inputArr, row, col);