function desending(arr){
    for(let i =0; i< arr.length; i++){
        for(let j =0; j<arr.length-i -1; j++){
            console.log("vitore ki choltese dheko bhai:=> ", arr[j], arr[j+1]);
            if(arr[j]<arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(desending([4,7,8,1,3,44]));