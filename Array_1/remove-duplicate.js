// Problem: Remove duplicates from a sorted array in-place and return the unique portion.
// Implement `uniqueElements(nums)` to return an array containing only the unique elements.
function uniqueElements(nums) {
    if (nums.length === 0) return [];
  
    let i = 0; // last unique index
  
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
  
    // return only unique part
    return nums.slice(0, i + 1);
  }

// Time: O(n)
// Space: O(1) extra (output excluded)