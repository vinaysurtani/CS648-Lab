// 7) Copy step 5; using for/of, display movies in a SORTED view.
const movies = ["Interstellar", "Spirited Away", "The Dark Knight", "Parasite", "Mad Max: Fury Road", "The Matrix", "Inception"];

console.log("Step 7 - sorted for/of output:");
const sorted = movies.slice().sort(); // copy + sort
for (const movie of sorted) {
  console.log(movie);
}
