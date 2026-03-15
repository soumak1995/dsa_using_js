function rearrangeArray(nums) {
    const n = nums.length;
    const result = new Array(n);
  
    let posIndex = 0;
    let negIndex = 1;
  
    for (let num of nums) {
      if (num > 0) {
        result[posIndex] = num;
        posIndex += 2;
      } else {
        result[negIndex] = num;
        negIndex += 2;
      }
    }
  
    return result;
  }

// Complexity
// Time: O(n)
// Space: O(n) (required to keep order)