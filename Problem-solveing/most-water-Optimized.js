var maxArea = function (heights) {
    let totalWater = 0;
    let fristPointer = 0;
    let lastPointer = heights.length -1;
    while(fristPointer < lastPointer){
        let height = Math.min(heights[fristPointer],heights[lastPointer])
        let width = lastPointer - fristPointer;

        let currentWater = height * width;
        totalWater = Math.max(totalWater,currentWater)
        
        // pointer increment & decrement
        if(heights[fristPointer] <= heights[lastPointer]){
            fristPointer++;
        }else{
            lastPointer--;
        }
    }
    return totalWater;
  };
  
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
  


//   Next-Problems https://leetcode.com/problems/trapping-rain-water/description/