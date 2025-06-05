function countNugativeNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
}

let arr = [-1, 4, 6, 2, 8, -4, 90, 0];
countNugativeNum(arr);
