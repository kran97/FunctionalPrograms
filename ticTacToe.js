let ticUtil = require('./utility/ticTacToeUtility');
var x, y;
var arr = [['*','*','*'],['*','*','*'],['*','*','*']];
var arrText = '';
for(let i =0; i<3; i++)
{
    for(let j= 0; j<arr[i].length; j++)
    {
        arrText+=arr[i][j] + ' ';
    }
    console.log(arrText);
    arrText = '';
}
var userSymbol = 'O';
var compSymbol = 'X';
var x, y, player;

var spaceCheck = ticUtil.checkSpace(arr, 3, 3); //checking space in matrix
var turn = ticUtil.fChance();
if(turn === 1)
{
    player = 1;
}
else
{
    player = 2;
}
while(spaceCheck != 0)
{
    if(player === 1) //user
    {
        var spaceCheck = ticUtil.checkSpace(arr, 3, 3);
        if(spaceCheck === 1) //means matrix has space
        {
            /*********
            * ask for coordinates
            */
            var coorArr = ticUtil.askCoor();
            x = coorArr[0];
            y = coorArr[1];
            var validCoor = ticUtil.coorValid(arr, x, y);
            if(validCoor == 1) //coordinates are valid.
            {
                arr[x][y] = userSymbol;             //input into matrix
                var winCheck = ticUtil.checkWin(arr, 3, 3); //check if user has won
                if(winCheck == 'O')                 //if user won
                {
                    console.log("YOU WON!!!");
                    ticUtil.output(arr, 3, 3);      //display the matrix here.
                    break;
                }
                else
                {
                    ticUtil.output(arr, 3, 3);      //show changed matrix.
                    console.log("");
                    player = 2;                     //go to computer's turn.
                }
            }
            else
            {
                console.log("Enter valid coordinates.");
                player = 1;
            }
        }
        else
        {
            console.log("DRAW MATCH.");
            break;
        }
    }
    else    //computer's turn
    {
        var spaceCheck = ticUtil.checkSpace(arr, 3, 3);
        if(spaceCheck === 1)
        {
            var compCoor = ticUtil.generateCoor();
            x = compCoor[0];
            y = compCoor[1];
            var validCoor = ticUtil.coorValid(arr, x, y);
            if(validCoor == 1) //coordinates are valid.
            {
                arr[x][y] = compSymbol;             //input into matrix
                var winCheck = ticUtil.checkWin(arr, 3, 3); //check if user has won
                if(winCheck == 'X')                 //if user won
                {
                    console.log("COMPUTER HAS WON!!!");
                    ticUtil.output(arr, 3, 3);      //display the matrix here.
                    break;
                }
                else
                {
                    ticUtil.output(arr, 3, 3);      //show changed matrix.
                    console.log("");
                    player = 1;                     //go to computer's turn.
                }
            }
            else
            {
                player = 2;
            }
        }
        else
        {
            console.log("DRAW MATCH.");
            break;
        }
    }
}

//OLD CODE

// var firstChance = ticUtil.fChance();
// var player;
// if(firstChance == 1)
// {
//     player = 1; //1 for user
//     /*******
//     * user will go first. check if matrix has space. if yes, then Ask for coordinates.
//     * check again if those coordinates are empty.
//     * Insert into matrix.
//     * check if win.
//     * Go to computer. check if matrix has space. ask computer for random_input*3.
//     * Check the cordinates.
//     */
//     var spaceCheck = ticUtil.checkSpace(arr, 3, 3);
//     if(spaceCheck === 1) //means matrix has space
//     {
//         /*********
//         * ask for coordinates
//         */
//         var coorArr = ticUtil.askCoor();
//         x = coorArr[0];
//         y = coorArr[1];
//         var validCoor = ticUtil.coorValid(arr, 3, 3);
//         if(validCoor == 1) //coordinates are valid.
//         {
//             arr[x][y] = userSymbol;
//             /****
//             * Now check if user won.
//             * if yes then show won. if no then show changed matrix.
//             * Go to computer's turn
//             */
//             var winCheck = ticUtil.checkWin();
//             if(winCheck == 'O')
//             {
//                 console.log("You have won");
//                 ticUtil.output(arr, 3, 3);
//                 //display the matrix here.
//             }
//             else
//             {
//                 ticUtil.output(arr, 3, 3);
//                 //show changed matrix.
//                 //go to computer's turn.
//             }
//         }
//         else
//         {
//             coorArr = ticUtil.askCoor();
//         }
//     }
//     else
//     {
//         ticUtil.output();
//         console.log("Game has tied.")
//     }
    
// }
// else
// {
//     player = 2; //player 2 is for computer.
    
// }
