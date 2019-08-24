let watch = require('./utility/utility');

console.log("Start timer Now.");
var start = Date.now();

console.log("Press enter to end timer.");

watch.userInput();

var stop = Date.now();

console.log("Timer has ended.");

var time = stop - start;

console.log("Elapsed time is : ", time, " milliseconds.");