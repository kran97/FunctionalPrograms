let vm = require('./utility/utility');

console.log("Enter the amount : ");

var amount = vm.userInput();

var notes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
var numNotes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const minNotes = vm.change(amount, notes, numNotes);

for(var i = 0; i<9; i++)
{
    console.log(notes[i] + " Rupee notes : " + minNotes[i]);
    console.log("");
}

var sum = vm.sumNotes(minNotes);

console.log(sum);