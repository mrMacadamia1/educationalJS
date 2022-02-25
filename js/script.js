"use sctrict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for ( let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            
            }else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Просмотренно мало фильмов');
        }else if(personalMovieDB >= 10 && personalMovieDB < 30){
            console.log('Вы классический зритель');
        }else if(personalMovieDB >= 30){
            console.log('ВЫ киноман');
        }else{
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
    
        }
    },
    toggleVisibleDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i <= 3; i ++) {
            let genre = prompt(`Ваш любимы жанр под номером ${i}`); 

            if (genre === '' || genre == null){
                console.log('Вы ввели не верные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;  
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item} `);
        });
    }
    
};
