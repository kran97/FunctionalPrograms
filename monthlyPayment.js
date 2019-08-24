var myArgs = process.argv.slice(2);
let read = require('./utility/utility');

var p = parseInt(myArgs[0]);
var y = parseInt(myArgs[1]);
var r = parseInt(myArgs[2]);

var monPay = read.payment(p, y, r);
console.log("Principle amount : ",p);
console.log("Years : ",y);
console.log("Interest : ",r);
console.log("Monthly Payments are ",monPay);