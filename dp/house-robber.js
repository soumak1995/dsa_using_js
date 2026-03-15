// Problem: Given houses with values, maximize theft without adjacent picks.
// Implement `rob(nums)` returning the max amount that can be robbed.
function robRange(nums, start, end) {
    const memo = new Array(nums.length).fill(-1);
  
    function dfs(i) {
      if (i > end) return 0;
  
      if (memo[i] !== -1) return memo[i];
  
      const take = nums[i] + dfs(i + 2);
      const skip = dfs(i + 1);
  
      memo[i] = Math.max(take, skip);
      return memo[i];
    }
  
    return dfs(start);
  }
  var rob = function(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
  
    const case1 = robRange(nums, 0, n - 2);
    const case2 = robRange(nums, 1, n - 1);
  
    return Math.max(case1, case2);
  };

// Metric	Value
// Time	O(n)
// Space	O(n) (memo + recursion stack)