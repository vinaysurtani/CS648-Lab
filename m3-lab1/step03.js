// 3) Copy step 2; add a NEW movie into the 3rd position (index 2).
// Display the LENGTH (should now be 6).
const movies = new Array(5);
movies[0] = "Interstellar";
movies[1] = "Spirited Away";
movies[2] = "The Dark Knight";
movies[3] = "Parasite";
movies[4] = "Mad Max: Fury Road";

// Insert into 3rd position (index 2)
movies.splice(2, 0, "Spider-Man: Into the Spider-Verse");

console.log("Step 3 - length:", movies.length); // 6
