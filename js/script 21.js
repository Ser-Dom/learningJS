'use strict';

/* const arr = [1, 2, 3, 6, 8];

arr.pop();

console.log(arr);

arr.push(10);

console.log(arr);

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const ase = [1, 8, 8, 7, 9];
ase[99] = 5;
console.log(ase.length);
console.log(ase);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));