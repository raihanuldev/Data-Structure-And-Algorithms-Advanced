
function bubbleSorting(arr){
    for(let i =0; i <= arr.length; i++ ){
        for(let j = 0; j <arr.length -1; j++){
            // console.log("to See ", arr[j],arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp= arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSorting([1,3,5,2]));

