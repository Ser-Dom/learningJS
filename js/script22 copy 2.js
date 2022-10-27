"use strict";

if (4 == 9) {
    console.log('ok');
} else {
    console.log('ERROR');
}


//if (num < 49) {
//    console.log('error');
//} else if (num > 100) {
//    console.log('too much');
//} else {
//    console.log('ok');
//}

//(num === 50) ? console.log('ok') : console.log('error');


const num = 50;

switch (num) {
    case 49:
        console.log('ложь');
        break;
    case 100: 
        console.log('ложь');
        break;
    case 51: 
        console.log('правда');
        break;
    default:
        console.log('не в этот раз');
        break;
}