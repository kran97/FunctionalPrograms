let input = require('./utility/utility');
let args = process.argv.slice(2);

var d = parseInt(args[0]);
console.log("date : ",d);

var m = parseInt(args[1]);
console.log("month : ",m);

var y = parseInt(args[2]);
console.log("year : ",y);

var check = input.checkDate(d, m, y);

if(check === true)
{
    var day = parseInt(input.findDay(d, m, y));
    console.log(day);
}