const numberOfFilms = +prompt('How many films have you seen yet?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

let lastWatchedMovie = prompt('What movie you have watched last?');
let movieRaiting = prompt('How can you rate the film?');
personalMovieDB.movies[lastWatchedMovie] = movieRaiting;

lastWatchedMovie = prompt('What movie you have watched last?');
movieRaiting = prompt('How can you rate the film?');
personalMovieDB.movies[lastWatchedMovie] = movieRaiting;

personalMovieDB.movies[lastWatchedMovie] = movieRaiting;
console.log(personalMovieDB);

