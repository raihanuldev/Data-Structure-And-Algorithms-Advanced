function asending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(
  asending([1, 4, 7, 9, 1, 6, 7, 9, 15, 7, 64, 13, 8, 7, 1, 6, 9, 4])
);
