function secondLargest(arr) {
  // For the Largest number we need to use the Nigative Infinity
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    } 
  }
  return second === -Infinity ? "No Second Largest found" : second;
}

console.log("Result:", secondLargest([0, 3, 5, 2, 7, 9]));
