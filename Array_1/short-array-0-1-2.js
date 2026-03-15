// Problem: Sort an array containing only 0s, 1s and 2s in-place (Dutch National Flag).
// Implement `sortColors(nums)` to reorder elements with O(n) time and O(1) space.
function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } 
      else if (nums[mid] === 1) {
        mid++;
      } 
      else { // nums[mid] === 2
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
      }
    }
  }

//   nums = [2, 0, 2, 1, 1, 0]
// low=0 mid=0 high=5
// nums[mid]=2 → swap(mid,high)
// [0,0,2,1,1,2]

// nums[mid]=0 → swap(mid,low)
// [0,0,2,1,1,2]

// nums[mid]=0 → swap(mid,low)
// [0,0,2,1,1,2]

// nums[mid]=2 → swap(mid,high)
// [0,0,1,1,2,2]


// Time: O(n)
// Space: O(1)