// 11) Copy step 10; return the FIRST item in the array and display it.
// (Using a method: shift())
let movies = ["Interstellar", "Spirited Away", "The Dark Knight", "Parasite", "Mad Max: Fury Road", "The Matrix", "Inception"];
const leastFavMovies = ["Movie 43", "The Last Airbender", "Cats (2019)"];

movies = movies.concat(leastFavMovies);

const firstItem = movies.shift(); // removes + returns first
console.log("Step 11 - first item:", firstItem);
