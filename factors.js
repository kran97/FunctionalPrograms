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

var read = require( 'readline-sync');
let fact = require('./utility/utility');
var num = read.question('Enter the number : ');

const primes = fact.prime(num);