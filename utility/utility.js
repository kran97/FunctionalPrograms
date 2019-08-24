var read = require('readline-sync');
module.exports = {

    harmonic(num) {
        if (num < 2) {
            return 1;
        }
        else {
            return 1 / num + this.harmonic(num - 1);
        }
    },

    efftemp(temp, wind)
    {
        if(temp<50 && wind>3 && wind<120)
        {
            return (35.74 + 0.6215*temp + ((0.4275*temp) - 35.75) * Math.pow(wind, 0.16));
        }
        else
        {
            console.log("Wrong input.");
        }
    },

    prime(n)
    {
        while(n%2 === 0)
        {
            console.log(2 + " ");
            n = n/2;
        }

        var i;

        for(i=3; i<=Math.sqrt(n); i = i+2)
        {
            while(n%i === 0)
            {
                console.log(i + " ");
                n = n/i;
            }
        }
        if(n>2)
        {
            console.log(n + " ");
        }
    },

    roots(a, b, c)
    {
        var delta = b*b - 4*a*c;
        if(delta>=0)
        {
            var root1 = (-b + Math.sqrt(delta))/(2*a);
            var root2 = (-b - Math.sqrt(delta))/(2*a);
            console.log("Root1 is " + root1 + " root2 is " + root2);
        }
        else
        {
            var real = (-b)/(2*a);
            var imag = (Math.sqrt(-delta))/(2*a);
            console.log("roots are imaginary.");
            console.log("Root1 is " + real + " + i" + imag);
            console.log("Root1 is " + real + " - i" + imag);
        }
    },

    game(stake, goal, num, bet)
    {
        var win = 0;
        var loss = 0;
        var i=0;
        while(stake>0 && stake<goal && i<num)
        {
            var val = Math.random();
            if(val<0.5)
            {
                stake = stake - bet;
                loss++;
            }
            else
            {
                stake = stake + bet;
                win++;
            }
            i++;
        }
        var winperc = (win/(win+loss))*100;
        var lossperc = 100-winperc;
        console.log("Win percent = " + winperc + ", loss percent = " + lossperc);
        console.log("Number of wins: " + win);
    },

    randomCoupon(n)
    {
        //var coup = [];
        var arr = [];
        var flag=1;
        arr[0] = parseInt(Math.random()*n);
        //coup[0] = arr[0];
        var i = 1;
        var j;
        var distinct = 1;
        while(distinct<n)
        {
            arr[i] = parseInt(Math.random()*n);
            for(j = 0; j<i; j++)
            {
                if(arr[i] === arr[j])
                {
                    flag=0;
                    break;
                }
                else
                {
                    flag=1;
                }
            }
            if(flag === 1)
            {
                distinct++;
            }
            i++;
        }
        for(var k = 0; k<arr.length; k++)
        {
            console.log(arr[k] + " ");
        }
        console.log(distinct);
        return i;
    },

    input(arr, row, col)
    {
        var i;
        var j;
        for(i = 1; i<=row; i++)
        {
            arr[i]=[];
            for(j = 1; j<=col; j++)
            {
                arr[i][j] = read.question("");
            }
        }
        return arr;
    },

    output(arr, row, col)
    {
        var i, j;
        for(i = 1; i<=row; i++)
        {
            for(j=1; j<=col; j++)
            {
                console.log(arr[i][j] + " ");
            }
            console.log("");
        }
    },

    dist(x, y)
    {
        return (Math.sqrt(Math.pow(x,2) + Math.pow(y, 2)));
    },

    userInput()
    {
        var readLine = read.question("");
        return readLine;
    },

    arrInput(arr, n)
    {
        var i;
        for(i=0; i<n; i++)
        {
            arr[i] = parseInt(read.question(""));
        }
        return arr;
    },

    sumZero(arr, n)
    {
        var i, j, k, count = 0;
        for(i=0; i<n-2; i++)
        {
            for(j=i+1; j<n-1; j++)
            {
                for(k=i+2; k<n; k++)
                {
                    if(arr[i] + arr[j] + arr[k] === 0)
                    {
                        console.log(arr[i], " ", arr[j], " ", arr[k]);
                        console.log("");
                        count++;
                    }
                }
            }
        }
        return count;
    },

    change(amount, notes, numNotes)
    {
        while(amount>0)
        {
            if(amount >= 2000)
            {
                numNotes[0] = Math.floor(amount/notes[0]);
                amount = amount - (numNotes[0]*notes[0]);
            }
            else if(amount>=500 && amount<2000)
            {
                numNotes[1] = Math.floor(amount/notes[1]);
                amount = amount - (numNotes[1]*notes[1]);
            }
            else if(amount>=100 && amount<500)
            {
                numNotes[2] = Math.floor(amount/notes[2]);
                amount = amount - (numNotes[2]*notes[2]);
            }
            else if(amount>=50 && amount<100)
            {
                numNotes[3] = Math.floor(amount/notes[3]);
                amount = amount - (numNotes[3]*notes[3]);
            }
            else if(amount>=20 && amount<50)
            {
                numNotes[4] = Math.floor(amount/notes[4]);
                amount = amount - (numNotes[4]*notes[4]);
            }
            else if(amount>=10 && amount<20)
            {
                numNotes[5] = Math.floor(amount/notes[5]);
                amount = amount - (numNotes[5]*notes[5]);
            }
            else if(amount>=5 && amount<10)
            {
                numNotes[6] = Math.floor(amount/notes[6]);
                amount = amount - (numNotes[6]*notes[6]);
            }
            else if(amount>=2 && amount<5)
            {
                numNotes[7] = Math.floor(amount/notes[7]);
                amount = amount - (numNotes[7]*notes[7]);
            }
            else
            {
                numNotes[8] = amount;
                amount = amount - numNotes[8];
            }
        }
        return numNotes;
    },

    sumNotes(minNotes)
    {
        var sum = 0;
        for (var i=0; i<minNotes.length; i++)
        {
            sum = sum + minNotes[i];
        }
        return sum;
    },

    findDay(d, m, y)
    {
        var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        y-= m<3;
        return (y + (y/4) - (y/100) + (y/400) + t[m-1] + d)%7;
    },

    checkDate(d, m, y)
    {
        var bool = false;
        if((y%4==0 && y%100 != 100) || (y%400 == 0))
        {
            if(m == 2)
            {
                if(d>29)
                {
                    console.log("February has only 29 days in this year.");
                }
                else
                {
                    bool = true;
                }
            }
            else
            {
                if(d>31)
                {
                    console.log("Invalid date.");
                }
                else
                {
                    bool = true;
                }
            }
        }
        else
        {
            if(m==2)
            {
                if(d>28)
                {
                    console.log("February has only 28 days in this year.");
                }
                else
                {
                    bool = true;
                }
            }
            else
            {
                if(d>31)
                {
                    console.log("Invalid date.");
                }
                else
                {
                    bool = true;
                }
            }
        }
        return bool;
    },

    tempConvFah(temp)
    {
        return temp*(9/5) + 32;
    },

    tempConvCel(temp)
    {
        return (temp-32)*(5/9);
    },

    payment(p, y, r)
    {
        var n = 12*y;
        var R = r/(12*100);
        return (p*R)/(1 - (Math.pow((1+R), -n)));
    },

    sqrt(num)
    {
        var t = num;
        while(Math.abs(t-(num/t)) > Math.pow(10, -15))
        {
            t = ((num/t)+t)/2;
        }
        return t;
    }
}