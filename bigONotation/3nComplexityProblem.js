// 3n complexity

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let sequenceCounter1 = {};
    let sequenceCounter2 = {};

    for(let val of arr1){ //n
        // console.log(val);
        sequenceCounter1[val] = sequenceCounter1[val]+1 || 1
        // console.log(sequenceCounter1);
    }
    for(let val of arr2){ //n
        sequenceCounter2[val]= sequenceCounter2[val]+1 || 1
    }

    for(let key in sequenceCounter1){ //n
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

//total complexity => n+n+n => 3n 
