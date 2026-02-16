// 16) Function to get a random item from an array.
function getRandomItem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Example:
const nums = [1,2,3,4,5,6,7,8,9,10];
console.log("Random item:", getRandomItem(nums));
