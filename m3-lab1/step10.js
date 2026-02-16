// 10) Copy step 9; return the LAST item in the array and display it.
// (Using an array function: movies[movies.length - 1])
let movies = ["Interstellar", "Spirited Away", "The Dark Knight", "Parasite", "Mad Max: Fury Road", "The Matrix", "Inception"];
const leastFavMovies = ["Movie 43", "The Last Airbender", "Cats (2019)"];

movies = movies.concat(leastFavMovies);

const lastItem = movies[movies.length - 1];
console.log("Step 10 - last item:", lastItem);
