var read = require('readline-sync');
module.exports = {
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
        var arrText='';
        for(let i =0; i<3; i++)
        {
            for(let j= 0; j<arr[i].length; j++)
            {
                arrText+=arr[i][j] + ' ';
            }
            console.log(arrText);
            arrText = '';
        }
    },

    userInput(wording)
    {
        var readLine = read.question(wording);
        return readLine;
    },

    fChance()
    {
        var turn = null;
        var firstChance = Math.random();
        if(firstChance<0.5)
        {
            turn = 1;
        }
        else
        {
            turn = 2;
        }
        return turn;
    },

    checkSpace(arr, r, c)
    {
        var i, j;
        var flag=0;
        for(i=0; i<r; i++)
        {
            for(j=0; j<c; j++)
            {
                if(arr[i][j] == '*')
                {
                    flag = 1;
                    break;
                }
            }
        }
        return flag;
    },

    askCoor()
    {
        var arr = [];
        console.log("Enter x coordinate : ");
        arr[0] = parseInt(read.question(""));
        console.log("Enter y coordinate : ");
        arr[1] = parseInt(read.question(""));
        return arr;
    },

    coorValid(arr, x, y)
    {
        var validity = 0;
        if(arr[x][y] == '*' && x>=0 && x<3 && y>=0 && y<3)
        {
            validity = 1;
        }
        else
        {
            validity = 0;
        }
        return validity;
    },

    checkWin(arr, r, c)
    {
        var symb = '#';
        var i,j;
        for(i=0; i<r; i++)
        {
            if(arr[i][0] == arr[i][1] && arr[i][1] == arr [i][2] && arr[i][0]!='*')
            {
                symb = arr[i][0];
                return symb;
            }
        }
        for(j=0; j<c; j++)
        {
            if(arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j] && arr[0][j] != '*')
            {
                symb = arr[0][j];
                return symb;
            }
        }
        if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[0][0] != '*')
        {
            symb = arr[0][0];
            return symb;
        }
        else if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[1][1] != '*')
        {
            symb = arr[1][1];
            return symb;
        }
        else 
        {
            return symb;
        }
    },

    generateCoor()
    {
        var arr = [];
        arr[0] = parseInt(Math.floor(Math.random()*3));
        arr[1] = parseInt(Math.floor(Math.random()*3));
        return arr;
    }
}