'use strict';

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

//++incr;
//--decr;

console.log(incr);
console.log(decr);

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 % 3);

console.log(2 * 4 == '8');
console.log(2 * 4 == 8);
console.log(2 * 4 === '8'); //'' превращают в строку, === строгое равенство

// && и
// || или

const isChecked = true,
    isClose = true;

console.log(isChecked && isClose);

const isChecked1 = true,
    isClose1 = false;

console.log(isChecked1 && isClose1);
console.log(isChecked1 && isChecked && isClose);

console.log(isChecked1 || isClose1);

console.log(!isClose1); // !-инвертирование

console.log(2 + 2 * 2 === '8'); //приоритезация операторов


console.log(2 + 2 * 2 != '8');