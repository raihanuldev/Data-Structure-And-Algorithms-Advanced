// we have an 2 array. if match all fristArray square value with secound array then return true. otherWays false.
// if elements not same then retun false

function same(arr1,arr2){
    // Frist Step 
    if(arr1.length !== arr2.length){ 
        return false
    }
    
    for(let i =0; i<arr1.length; i++){
        let currentIndex = arr2.indexOf(arr1[i] **2)
        if(currentIndex === -1){
            return false
        }
        arr2.splice(currentIndex,1)
    }
    return true

}
// n*n => n2 time complexity
// that's huge .
console.log(same([2,3,6],[9,4,36]));   //should be return of true