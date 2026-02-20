// 8) Copy step 5; create leastFavMovies with 3 movies you regret watching.
// Display both arrays with EXACT formatting/spaces.
const movies = ["Interstellar", "Spirited Away", "The Dark Knight", "Parasite", "Mad Max: Fury Road", "The Matrix", "Inception"];
const leastFavMovies = ["Movie 43", "The Last Airbender", "Cats (2019)"];

console.log("Movies I like:\n");
for (const movie of movies) {
  console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (const movie of leastFavMovies) {
  console.log(movie);
}
