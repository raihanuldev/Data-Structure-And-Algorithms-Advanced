
function oddNumber(arr){
    let result = [];
    function helper(input){
        if(input.length ===0) return
        if(input[0] %2 !==0){
            result.push(input[0])
        }
        helper(input.slice(1))
    }

    helper(arr)
    return result
}



console.log(oddNumber([1,2,3,4,5,6,7,8,9,45,78,457,5748,57]));