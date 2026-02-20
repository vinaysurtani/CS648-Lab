// 15) Function to filter false, null, 0 and blank values from an array.
function filterValues(arr) {
  return arr.filter(item => item !== false && item !== null && item !== 0 && item !== "");
}

// Test Data:
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
// Expected Result: [58, "abcd", true]
