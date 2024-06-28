function products(arr, targetProduct) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === targetProduct) return middle;

    if (targetProduct > arr[middle]) {
      start = middle + 1;
    }else{
        end = middle-1
    }
  }
  return null
}

console.log(products([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 17], 17));
