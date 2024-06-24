
function sumOfArraySlow(arr){
    if(arr.length ===0) return 0;
    let rest = arr.slice(1);
    return arr[0] + sumOfArraySlow(rest)
}

function sumOfArrayFast(arr){
    return helperOfSum(arr,0);
}

function helperOfSum(arr,index){
    if(arr.length ===index) return 0;
    return arr[index] + helperOfSum(arr,index+1);
}

let input = new Array(9000).fill(1);

// slow function date count
const startDateForSlow = Date.now()
console.log(sumOfArraySlow(input));
const endDateForSlow = Date.now()
console.log(`time elapsed for slow function ${endDateForSlow - startDateForSlow} ms`);

// time count for fast function
const startDateForFast = Date.now()
console.log(sumOfArraySlow(input));
const endDateForFast = Date.now()
console.log(`time elapsed for Fast function ${endDateForFast - startDateForFast} ms`);