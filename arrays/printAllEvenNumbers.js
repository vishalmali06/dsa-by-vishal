function evenNumbers(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if(arr[i] % 2 == 0){
       console.log(arr[i]);
    }
  }
}

let arr = [10, 3, 5, 2, 7, 6, 9];
evenNumbers(arr);