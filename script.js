"use strict";

if (4 == 4){
    console.log('Ok!');
} else {
    console.log('==> Error!');
}

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

//тренарный оператор

(num === 50) ? console.log('Ok') : console.log('Error');


//swith
const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку, правда!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}