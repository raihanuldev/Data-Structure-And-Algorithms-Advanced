function heightChecker(heights) {
    // Step 1: Create a sorted copy of the heights array
    const expected = [...heights].sort((a, b) => a - b);
    
    // Step 2: Initialize a counter for mismatches
    let mismatchCount = 0;
    
    // Step 3: Compare each element in heights with expected
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            mismatchCount++;
        }
    }
    
    // Step 4: Return the count of mismatches
    return mismatchCount;
}

console.log(heightChecker([1,1,4,2,1,3])); 