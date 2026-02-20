// 12) Programmatically retrieve movies in your array that you do NOT like and return their indices.
// Then, using those indices, programmatically add movies that you DO like.

// We'll start with 7 movies, but mark the ones we "don't like" as a placeholder string.
const movies = ["Interstellar", "Spirited Away", "The Dark Knight", "Parasite", "Mad Max: Fury Road", "The Matrix", "Inception"];
const dontLike = ["Cats (2019)", "Movie 43", "The Last Airbender"];

// Add the disliked movies into the main list so we can find them:
movies.push(...dontLike);

// Find indices of movies we do NOT like:
const dislikedIndices = [];
for (let i = 0; i < movies.length; i++) {
  if (dontLike.includes(movies[i])) dislikedIndices.push(i);
}

console.log("Step 12 - indices of movies I do NOT like:", dislikedIndices);

// Replace those indices with movies we DO like:
const replacements = ["Arrival", "The Lord of the Rings: The Fellowship of the Ring", "Wall-E"];
for (let i = 0; i < dislikedIndices.length; i++) {
  movies[dislikedIndices[i]] = replacements[i];
}

console.log("Step 12 - updated movies array:");
for (const movie of movies) {
  console.log(movie);
}
