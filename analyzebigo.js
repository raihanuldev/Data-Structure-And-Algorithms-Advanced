function uniquenames(arr){
    let uniqueArray =[];
    for(let i =0; i < arr.length; i++){
        let ele = arr[i];
        if(!uniqueArray.includes(ele)){
            uniqueArray.push(ele)
        }
    }
return uniqueArray;
}
let nameArray = ["Mahin","Rashid","Raihan","habib","Raihan"];

console.log(uniquenames(nameArray));