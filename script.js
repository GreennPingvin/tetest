'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    this.count = +prompt('How many films have you seen yet?');

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('How many films have you seen yet?');
    }
  },

  toggleVisibleMyDB: function () {
    this.privat = !this.privat;
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = prompt('На сколько оцените его?', '').trim();

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        this.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (this.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (this.count >= 10 && this.count < 30) {
      console.log('Вы классический зритель');
    } else if (this.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB: function () {
    if (!this.privat) {
      console.log(this);
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (favoriteGenre === '' || favoriteGenre == null) {
        continue;
      }

      this.genres.push(favoriteGenre);
    }

    this.genres.forEach((genre, i) => {
      console.log(`Любимый жанр #(${i + 1}) - это ${genre}`);
    });
  },
};
