'use strict';

const str = "Test";
const arr = [1, 2, 4];

/* console.log(arr[0]);
console.log(arr.length);
console.log(str[2]); */


console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());


const fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));

const logg = "Hello world shit";

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-10, -5));  //можно отрезать с конца


console.log(logg.substring(6, 11));  //тоже что и slice

console.log(logg.substr(6, 3));  //начало и сколько всего резать


const num = 12.2;
console.log(Math.round(num));

const test = '14.278px';
console.log(parseInt(test));
console.log(parseFloat(test));
