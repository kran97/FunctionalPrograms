var read = require('readline-sync');
let harm = require('./utility/utility')

var n = read.question("Enter the value of n : ");

/*function harm(num)        //recursion method
{
    if(num<2)
    {
        return 1;
    }
    else
    {
        return 1/num + harm(num-1);
    }
}*/

if (n > 0) {
    /*
    var base = 0;
    for (var i=1; i<=n; i++)      //iteration method
    {
        base = base + 1/i;
    }
    console.log(base);*/
    const result = harm.harmonic(n);
    console.log(result);
}
else {
    console.log("n should be greater than 0.");
}