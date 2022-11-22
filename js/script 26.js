'use strict';

//1 превращение в строку
//1,1
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//1,2
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

//2 превращение в число 
//2,1
console.log(typeof(Number('4')));

//2,2
console.log(typeof(+'5'));

//2,3
console.log(typeof(parseInt('15', 10)));


let answer = +prompt('Hello', '');

//3 в булиновые значения
//3,1

// 0, '', null, undefined, NaN это все превращается в false, все остальное true 

let switcher = null;

if (switcher) {
    console.log('Not Working...');
}

switcher = 1;
if (switcher) {
    console.log('Working...');
}

//3,2
console.log(typeof(Boolean('4')));

//3,3
console.log(typeof(!!"756"));