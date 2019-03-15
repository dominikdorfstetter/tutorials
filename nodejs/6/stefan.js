var movies = require('./movies');
var stefansMovies = movies();

stefansMovies.favoriteMovie = "The Matrix";

console.log("Stefans Lieblings film ist " + stefansMovies.favoriteMovie);