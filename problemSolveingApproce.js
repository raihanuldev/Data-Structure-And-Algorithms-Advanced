/**
 * Problem: find higest temp ,lowest temp, find any error,
 */
let temp = [-2, 45, 23, 41, "error", 65, 14, 53];

function getHigherAndLower(arr) {
  // Create a Higher variable
  let higher = arr[0];
  // createa lower variable
  let lower = arr[0];
  // iterate the whole array
  for (let i = 0; i < arr.length; i++) {
    // lets check is there has any error if error than ignore
    if (typeof arr[i] !== "number") continue;
    // if higer variable has small number than our current number than value will be our current element
    if (higher < arr[i]) {
      higher = arr[i];
    }
    // if lower variable has bigger number than our current number than value will be our current element
    if (lower > arr[i]) {
      lower = arr[i];
    }
  }
  console.log(higher, lower);
  return higher -lower
}

getHigherAndLower(temp);
