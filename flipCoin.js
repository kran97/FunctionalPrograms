var read = require('readline-sync');

var n = read.question('number of times to flip the coin: ');

var tail = 0;
var head = 0;

if(n > 0)
{
    while(n>0)
    {
        var r = Math.random();
        if(r<0.5)
        {
            tail++;
        }
        else
        {
            head++;
        }
        n--;
    }
    var headper = head/(head+tail)*100;
    var tailper = 100-headper;
    console.log("Percentage of heads is " + headper + "%, percentage of tails is " + tailper + "%");
}
else
{
    console.log("number should be greater than 0");
}