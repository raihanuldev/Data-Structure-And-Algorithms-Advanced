function search(nums,target){
    let start = 0;
    let end = nums.length -1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2)
        if(nums[middle]=== target) return middle;

        if(target > nums[middle]){
            start = middle +1
        }else{
            end = middle -1
        }
    }
    return -1
}
console.log(search([-0,2,3,4,6,7,9],3));