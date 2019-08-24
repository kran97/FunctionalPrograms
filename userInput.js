/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   To take input from user and replace it in the template
 * 
 * @description
 * 
 * @file        :   userInput.js
 * @overview    :   Takes input from user and replaces the string in the template
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/
module.exports = {
input
}
function input()
{
    var readline = require('readline-sync');

    var name = readline.question('Enter username: ');

    if(name.length >= 3)
    {
        console.log('Hello ' + name + ", how are you?");
    }
    else
    {
        console.log("Username should be minimum 3 characters long.");
    }
    return name;
}
input();