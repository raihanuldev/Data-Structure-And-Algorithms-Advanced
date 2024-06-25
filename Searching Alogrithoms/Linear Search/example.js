// write an function for finding index of value from arry.

function linearSearch(arr, value) {
  if (arr.length == 0) return;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == value) return i;
  }
  return -1
}

console.log(linearSearch([1, 2, 3, 4, 7, 8, 9], 7));

// this is linear search example..........
