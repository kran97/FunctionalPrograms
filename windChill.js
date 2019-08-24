let tv = require('./utility/utility');
var myArgs = process.argv.slice(2);

let temp = myArgs[0];
let wind = myArgs[1];

console.log(temp + " " + wind);

const w = tv.efftemp(temp, wind);

console.log(w);