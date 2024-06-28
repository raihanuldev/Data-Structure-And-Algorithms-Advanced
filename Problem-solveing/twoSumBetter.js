function twoSum(nums,target){
    for(let i =0; i<nums.length; i++){
        let remaining = target - nums[i];
        for(let j = i+1; j<nums.length; j++){
            if(remaining === nums[j]) return [i,j]
        }
    }
}
console.log(twoSum([1,3,4,56],5));