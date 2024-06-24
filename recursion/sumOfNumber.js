
// function sumOfNumber(n){
//     let total = 0;
//     for(let i = 1; i <= n; i++){
//         total = total+i
//     }
//     console.log(total);
// }


// sum of with Recursion way
function sumOfNumber(n){
    if(n<0) return 0;
    return n + sumOfNumber(n-1)
}

console.log(sumOfNumber(10));