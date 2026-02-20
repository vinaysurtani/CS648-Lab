// 17) Function to get the largest number from a numeric array.
function getLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr.reduce((max, n) => (n > max ? n : max), arr[0]);
}

// Example:
const nums = [12, 5, 99, 34, 2, 101, 88];
console.log("Largest number:", getLargestNumber(nums));
