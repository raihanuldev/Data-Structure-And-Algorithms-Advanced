/*
O(1) - Constant Time Complexity: Algorithms with O(1) complexity have a constant runtime, 
regardless of the input size. It means that the algorithm takes the same amount of time to execute,
regardless of the size of the data. 
An example of O(1) complexity is accessing an element in an array by its index.
*/

function AccessELementByIndex(arr,index){
    return arr[index];
}

// example of usage
const mrArray = [12,234,45,63,64,643,745632,2345];
const mrIndex = 2;
console.log(AccessELementByIndex(mrArray,mrIndex));