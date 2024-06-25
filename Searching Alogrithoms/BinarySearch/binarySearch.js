function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2); // Calculate middle index correctly

    if (arr[middle] === value) {
      // First condition to check if the middle element is the value
      return middle;
    }

    if (value > arr[middle]) {
      start = middle + 1; 
    } else {
      end = middle - 1; 
    }
  }

  return -1; // Return -1 if the value is not found
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
