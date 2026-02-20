// 9) Copy step 8; concat arrays into movies; display reverse SORTED list.
let movies = ["Interstellar", "Spirited Away", "The Dark Knight", "Parasite", "Mad Max: Fury Road", "The Matrix", "Inception"];
const leastFavMovies = ["Movie 43", "The Last Airbender", "Cats (2019)"];

movies = movies.concat(leastFavMovies);

const reverseSorted = movies.slice().sort().reverse();
console.log("Step 9 - reverse sorted merged list:");
for (const movie of reverseSorted) {
  console.log(movie);
}
