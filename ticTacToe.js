let ticUtil = require('./utility/ticTacToeUtility');
var x, y;
/*x = ticUtil.userInput("tell me the value of x");
y = ticUtil.userInput("tell me the value of y");

console.log(" x == ", x);
console.log(" y == ", y);*/
var arr = [['*', '*', '*'], ['*', '*', '*'], ['*', '*', '*']];
var userSymbol = 'O';
var compSymbol = 'X';
var x, y;
var firstChance = ticUtil.fChance();
var player;
if(firstChance == 1)
{
    player = 1; //1 for user
    /*******
    * user will go first. check if matrix has space. if yes, then Ask for coordinates.
    * check again if those coordinates are empty.
    * Insert into matrix.
    * check if win.
    * Go to computer. check if matrix has space. ask computer for random_input*3.
    * Check the cordinates.
    */
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
        if(validCoor == 1)
        {
            arr[x][y] = userSymbol;
            /****
            * Now check if user won.
            * if yes then show won. if no then show changed matrix.
            * Go to computer's turn
            */
            var winCheck = 
        }
        else
        {
            coorArr = ticUtil.askCoor();
        }
    }
    
}
