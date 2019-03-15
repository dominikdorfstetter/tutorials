var movies = require('./movies');
var dominiksMovies = movies();

dominiksMovies.favoriteMovie = "The hitchhikers guide to the galaxy";
console.log("Dominiks Lieblings film ist " + dominiksMovies.favoriteMovie);