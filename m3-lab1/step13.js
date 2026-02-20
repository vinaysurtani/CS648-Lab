// 13) Multi-dimensional array: [movieName, ranking]. Use filter() to display ONLY movie names.
// Must filter by primitive data type.
const movies = [
  ["Interstellar", 1],
  ["Spirited Away", 2],
  ["The Dark Knight", 3],
  ["Parasite", 4],
  ["Mad Max: Fury Road", 5],
];

// Loop through the array and filter out ONLY the movie name (string) from each sub-array.
console.log("Step 13 - movie names only:");
for (const pair of movies) {
  const nameOnly = pair.filter(item => typeof item === "string");
  // nameOnly is an array with 1 string; log the string
  console.log(nameOnly[0]);
}
