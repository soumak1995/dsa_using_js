// Problem: Find the length of the longest subarray with sum equal to K.
// Implement `longestSubarrayWithSumK(nums, K)` returning the maximum length.
function longestSubarrayWithSumK(nums, K) {
    const map = new Map(); // prefixSum -> first index
    let sum = 0;
    let maxLen = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
  
      // Case: subarray from 0 to i
      if (sum === K) {
        maxLen = i + 1;
      }
  
      // Case: subarray exists ending at i
      if (map.has(sum - K)) {
        maxLen = Math.max(maxLen, i - map.get(sum - K));
      }
  
      // store first occurrence only
      if (!map.has(sum)) {
        map.set(sum, i);
      }
    }
  
    return maxLen;
  }
  
//Complexity
// Time: O(n)
// Space: O(n)

//Array has only positive numbers
  function longestSubarrayPositive(nums, K) {
    let left = 0, sum = 0, maxLen = 0;
  
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];
  
      while (sum > K) {
        sum -= nums[left];
        left++;
      }
  
      if (sum === K) {
        maxLen = Math.max(maxLen, right - left + 1);
      }
    }
  
    return maxLen;
  }

// Time: O(n)
// Space: O(1)