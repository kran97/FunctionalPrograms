var read = require('readline-sync');
module.exports = {
    binary(num)
    {
        var mod = [];
        var i=0;
        if(num === 1)
        {
            mod[i]=1;
            return mod;
        }
        while(num>1)
        {
            mod[i] = num%2;
            //console.log(mod[i])
            num = Math.floor(num/2);
            i++;
        }
        mod[i] = 1;
        return mod;
    }
}