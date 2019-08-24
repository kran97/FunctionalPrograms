let cp = require('./utility/utility');

console.log("Number of coupons : ");

var n = cp.userInput();

const randNum = cp.randomCoupon(n);

console.log("Total random numbers required : " + randNum);