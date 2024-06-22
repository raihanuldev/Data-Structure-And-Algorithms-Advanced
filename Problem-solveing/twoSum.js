function twoSum(nums, target) {
    // Create a hash map to store value and its index
    const hashMap = new Map();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the hash map
        if (hashMap.has(complement)) {
            // If found, return the indices
            return [hashMap.get(complement), i];
        }
        
        // If not found, add the current element and its index to the hash map
        hashMap.set(nums[i], i);
    }
    
    // If no solution found, return an empty array (though the problem states there is always one solution)
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 