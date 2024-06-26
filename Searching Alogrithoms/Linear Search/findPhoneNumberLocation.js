let phoneNumbers = [ 1234,2345,4326,23791,409237,43203,21094,2384523,35285,];

function findPhoneNumber(arr,targetValue){
    if(arr.length === 0) return
    for(let i =0; i < arr.length; i++){
        if(arr[i] == targetValue) return i;
    }
    return -1
}

console.log(findPhoneNumber(phoneNumbers,122));