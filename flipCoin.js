var read = require('readline-sync');
module.exports = {
    flip,
    input
}
function input()
{
    console.log('number of times to flip the coin: ');
    let n = parseInt(read.question(""));
    return n;
}
let num = input();
function flip(num)
{
    var tail = 0;
    var head = 0;

    if(num > 0)
    {
        while(num>0)
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
            num--;
        }
        var headper = head/(head+tail)*100;
        var tailper = 100-headper;
        console.log("Percentage of heads is " + headper + "%, percentage of tails is " + tailper + "%");
    }
    else
    {
        console.log("number should be greater than 0");
    }
}
flip(num);