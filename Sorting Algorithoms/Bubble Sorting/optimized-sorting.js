function optimizedsorting(arr) {
  // there are an variable for optimized
  let isSwap;
  for (let i = 0; i < arr.length; i++) {
    isSwap = false;
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true
      }
    }
    if(!isSwap) break
  }
  return arr;
}
console.log(optimizedsorting([8,1,2,3,4,5,6,7]));