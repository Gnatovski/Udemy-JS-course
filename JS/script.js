"use strict";

const numberOfFilms = +prompt('How many movies you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What was the last movie you've seen?", ''),
      b = prompt("How would you rate it?", ''),
      c = prompt("Another movie you watched?", ''),
      d = prompt("How would you rate it?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);