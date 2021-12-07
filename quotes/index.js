/* 
* TIitle: Quotes Library
* Description: Utility Library for getting a list of Quotes.
* Author : Mr. Saif
* Date: 03 dec, 2021
* 
*/

//dependencies
const fs = require('fs');

//Quote object - module scaffolding
const quotes = {};

//getting quotes and returning them to the user
quotes.allQuotes = function allQuotes(){
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');

    const arrayOfQuotes = fileContents.split(/\r?\n/);
    return arrayOfQuotes;
};
//exorting the module
module.exports = quotes;
