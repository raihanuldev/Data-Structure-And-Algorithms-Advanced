// // we have an 2 array. if match all fristArray square value with secound array then return true. otherWays false.
// // if elements not same then retun false

// function same(arr1,arr2){
//     // Frist Step 
//     if(arr1.length !== arr2.length){ 
//         return false
//     }
    
//     for(let i =0; i<arr1.length; i++){
//         let currentIndex = arr2.indexOf(arr1[i] **2)
//         if(currentIndex === -1){
//             return false
//         }
//         arr2.splice(currentIndex,1)
//     }
//     return true

// }
// // n*n => n2 time complexity
// // that's huge .



// better complexity
function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let sequenceCounter1 = {};
    let sequenceCounter2 = {};

    for(let val of arr1){
        // console.log(val);
        sequenceCounter1[val] = sequenceCounter1[val]+1 || 1
        // console.log(sequenceCounter1);
    }
    for(let val of arr2){
        sequenceCounter2[val]= sequenceCounter2[val]+1 || 1
    }

    for(let key in sequenceCounter1){
        // console.log(key,sequenceCounter2[key**2]);
        if(!(key **2) in sequenceCounter2){
            return false
        }
        if(sequenceCounter2[key ** 2] !== sequenceCounter1[key]){
            return false
        }
    }
    return true


}

console.log(same([2,3,6],[9,4,36]));   //should be return of true