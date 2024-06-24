
// function sumOfArray(arr){
//     if(arr.length ===0) return 0;
//     let rest = arr.slice(1);
//     return arr[0] + sumOfArray(rest)
// }
// time complexity => bigO(n*n) => n^2
// space complexity => bigO(n) 



// try to do more scaleable Code of recursion
function sumOfArray(arr){
    return helperOfSum(arr,0);
}

function helperOfSum(arr,index){
    if(arr.length ===index) return 0;
    return arr[index] + helperOfSum(arr,index+1);
}

// time complexity => bigO(n)
// space complexity => bigO(n)
console.log(sumOfArray([2,3,5]));