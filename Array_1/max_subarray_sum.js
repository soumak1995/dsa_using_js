// Problem: Find the contiguous subarray with the largest sum (Kadane's algorithm).
// Implement `maxSubArray(nums)` returning the maximum subarray sum.
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// i   num   currentSum              maxSum
// 0   -2    -2                       -2
// 1    1    max(1, -2+1)=1           1
// 2   -3    max(-3, 1-3=-2)=-2       1
// 3    4    max(4, -2+4=2)=4         4
// 4   -1    max(-1, 4-1=3)=3         4
// 5    2    max(2, 3+2=5)=5          5
// 6    1    max(1, 5+1=6)=6          6
// 7   -5    max(-5, 6-5=1)=1         6
// 8    4    max(4, 1+4=5)=5          6


// Complexity
// Time: O(n)
// Space: O(1)