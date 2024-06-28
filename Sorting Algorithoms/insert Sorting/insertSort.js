function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    for(let j = i; j>0; j--){
        if(arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1]
            arr[j-1] = temp;
        }else{
            break
        }
    }
  }
  return arr;
}

console.log(insertSort([-12, 3, 1, 5, 9, 7]));
