
let list = [1,2,3,4,5,6,7,8,9];
let oddList =[]
for(let i =1; i<= list.length; i++){
    console.log(i%2 !==0);
    if(i%2 !==0){
        oddList = [...oddList,i]
    }
}
console.log(oddList);