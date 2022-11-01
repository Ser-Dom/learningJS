'use strict';


let num = 20;

function showFirstMessage(text) {        // Создаем фунцкию с именем showFirstMessage
    console.log(text);                   // действия этой функции
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World");                     // вызов функции
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(2, 3));
console.log(calc(3, 5));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
    console.log("Hi");

};

logger();


const culcul = (a, b) => a + b;   //стрелочная функция