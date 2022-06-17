"use strict";

/*const humburger = true,
      fries = true; //false

if (humburger && fries) {
    console.log('Я сыт!');
}
console.log(humburger && fries);
*
//

const humburger = 3,
      fries = 1, //false
      cola = 0;

//console.log(humburger === 3 && cola && fries);

if (humburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
}
*
const humburger = 3,
      fries = 0, //false
      cola = 0;

//console.log(humburger === 3 && cola && fries);

if (humburger || cola || fries) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}
*

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);
*/
const humburger = 3,
      fries = 3, //false
      cola = 0,
      nuggets = 2;

//console.log(humburger === 3 && cola && fries);

if (humburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}
console.log(humburger ===3 && cola === 2 || fries === 3 && nuggets);