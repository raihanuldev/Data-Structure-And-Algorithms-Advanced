var maxArea = function (heights) {
  let totalWater = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      // console.log(i,j);
      let height;
      if (heights[i] > heights[j]) {
        // 1        8
        height = heights[j];
      } else {
        height = heights[i];
      }
      let width = j - i;
      let currentWater = height * width;
      if(currentWater >totalWater){
        totalWater = currentWater
      }
    }
  }
  return totalWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
