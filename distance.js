var myArgs = process.argv.slice(2);
let dis = require('./utility/utility');

var x = parseInt(myArgs[0]);
var y = parseInt(myArgs[1]);

const distance = dis.dist(x, y);

console.log(distance);