/*
* Title: a small node app
* des: an application that will deliver quotes per second interval
* Author : Saif ul Islam
* Date:  13 october, 2021
*
*/
// Module scaffolding
const math = {};

//get a random integer between to values
math.getRandomNumber = function getRandomNumber(min, max){
    let mini = min;
    let maxi = max;

    mini = typeof mini == 'number' ? mini : 0;
    maxi = typeof maxi == 'number' ? maxi : 0;
    return Math.floor(Math.random() * (maxi - mini +1) + min);
}

//Exporting the library.
module.exports = math;
