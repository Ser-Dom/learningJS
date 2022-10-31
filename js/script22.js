"use strict";

/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", ''); //+превращает строку в число

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const a = prompt('Один из последних просмотрееных фильмов', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из последних просмотрееных фильмов', ''),
      d = prompt('На сколько оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотрееных фильмов', ''),
          b = prompt('На сколько оцените его', '');

    if (a != null && b !=null && a != '' && b !='' && a.length < 50) {

        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    } 

}

if(personalMovieDB.count < 10) {

    console.log('Просмотрено довольно мало фильмов');

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {

    console.log('Вы классический зритель');

} else  {

    console.log('Вы киноман');
    
}

console.log(personalMovieDB); */


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');


const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres:[],
      privat: false
    };

let i = 2;
while (i != 0 ) {

        const a = prompt('Один из последних просмотрееных фильмов', ''),
              b = prompt('На сколько оцените его', '');


        if (a!=null && b != null && a !="" && b !="" && a.length <50) {
            i--;
            personalMovieDB.movies[a] = b;
        }
        
    }

console.log(personalMovieDB);




