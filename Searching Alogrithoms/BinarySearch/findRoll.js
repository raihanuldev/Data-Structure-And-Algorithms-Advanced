
const rolls = [789144,789145,789146,789147,789148,789149,789150,789151,789152]

// find the number useing Binay Search

function findNums(rolls,targetRoll){
    let start = 0; // start index declere
    let end = rolls.length -1 // end index declere
    
    // itarete loop
    while(start <= end){
        let middle = Math.floor((start+end)/2)  // midile index declere

        // in frist step find
        if(rolls[middle] === targetRoll) return middle;
        //2nd step find
        if(targetRoll > rolls[middle]){
            start = middle +1
        }
        else{
            end = middle-1
        }
    }
    return -1;
}

console.log(findNums(rolls,789147));