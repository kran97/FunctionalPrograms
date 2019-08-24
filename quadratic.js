let x = require('./utility/utility');
var read = require('readline-sync');

var a = read.question('Enter a : ');
var b = read.question('Enter b : ');
var c = read.question('Enter c : ');

const roots = x.roots(a, b, c);