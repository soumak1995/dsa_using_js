// Problem: Given an elevation map `height`, compute how much water it can trap after raining.
// Implement `trap(height)` returning total trapped water.
function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
  
    while (left < right) {
      if (height[left] < height[right]) {
        leftMax = Math.max(leftMax, height[left]);
        water += leftMax - height[left];
        left++;
      } else {
        rightMax = Math.max(rightMax, height[right]);
        water += rightMax - height[right];
        right--;
      }
    }
  
    return water;
  }

//Complexity
// Time: O(n)
// Space: O(1)