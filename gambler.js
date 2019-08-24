let gamb = require('./utility/utility');
var read = require('readline-sync');

var stake = read.question('Enter stake : ');
var goal = read.question('Enter goal : ');
var num = read.question('Enter number of times he/she plays : ');
var bet = 1;

const gamble = gamb.game(stake, goal, num, bet);